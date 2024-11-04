import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../user/entity/user.entity";
import {Repository} from "typeorm";
import {OtpEntity} from "../user/entity/otp.entity";
import {CheckOtpDto, SendOtpDto} from "./dto/otp.dto";
import {randomInt} from "crypto";
import {JwtService} from "@nestjs/jwt";
import {TokensPayload} from "./types/payload";
import { AuthMessage, BadRequestMessage, confilictMessage, NotFoundMessage, PublicMessage } from "src/common/enum/message.enum";
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    @InjectRepository(OtpEntity) private otpRepository: Repository<OtpEntity>,
    private jwtService: JwtService,
  ) {}

  async sendOtp(otpDto: SendOtpDto) {
    const {mobile} = otpDto;
    let user = await this.userRepository.findOneBy({mobile});
    if (!user) {
      user = this.userRepository.create({
        mobile,
      });
      user = await this.userRepository.save(user);
    }
    const code = await this.createOtpForUser(user);
    return {
      message: PublicMessage.SendOtpCode,
      code
    };
  }
  async checkOtp(otpDto: CheckOtpDto) {
    const {code, mobile} = otpDto;
    const now = new Date();
    const user = await this.userRepository.findOne({
      where: {mobile},
      relations: {
        otp: true,
      },
    });

    if (!user || !user?.otp)
      throw new UnauthorizedException(NotFoundMessage.NotFoundUser);
    const otp = user?.otp;
    if (otp?.code !== code)
      throw new UnauthorizedException(AuthMessage.InvalidOtpCode);
    if (otp.expires_in < now)
      throw new UnauthorizedException(AuthMessage.ExpiredOtpCode);
    if (!user.mobile_verify) {
      await this.userRepository.update(
        {id: user.id},
        {
          mobile_verify: true,
        }
      );
    }
    const {accessToken, refreshToken} = this.makeTokensForUser({
      id: user.id
    });
    return {
      accessToken,
      refreshToken,
      message: PublicMessage.EntredSuccessfully,
    };
  }

  async checkMobile(mobile: string) {
    const user = await this.userRepository.findOneBy({mobile});
    if (user) throw new ConflictException(confilictMessage.ConfilictMobile);
  }

  async createOtpForUser(user: UserEntity) {
    const expiresIn = new Date(new Date().getTime() + 1000 * 60 * 2);
    const code = randomInt(10000, 99999).toString();
    let otp = await this.otpRepository.findOneBy({userId: user.id});
    if (otp) {
      if (otp.expires_in > new Date()) {
        throw new BadRequestException(BadRequestMessage.UnInvalidOtpCode);
      }
      otp.code = code;
      otp.expires_in = expiresIn;
    } else {
      otp = this.otpRepository.create({
        code,
        expires_in: expiresIn,
        userId: user.id,
      });
    }
    otp = await this.otpRepository.save(otp);
    user.otpId = otp.id;
    await this.userRepository.save(user);
    return code
  }

  makeTokensForUser(payload: TokensPayload) {
    const accessToken = this.jwtService.sign(payload, {
      secret: "asfdjkklj8-fsdjhjkhsdf-sfh",
      expiresIn: "30d",
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: "skfhsfjdh-34kjkdf03hfdjk-ksjdfhjk",
      expiresIn: "1y",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  async validateAccessToken(token: string) {
    try {
      const payload = this.jwtService.verify<TokensPayload>(token, {
        secret:"asfdjkklj8-fsdjhjkhsdf-sfh",
      });
      if (typeof payload === "object" && payload?.id) {
        const user = await this.userRepository.findOneBy({id: payload.id});
        if (!user) {
          throw new UnauthorizedException(AuthMessage.InvalidOtpCode);
        }
        return user;
      }
      throw new UnauthorizedException(AuthMessage.InvalidOtpCode);
    } catch (error) {
      throw new UnauthorizedException(AuthMessage.InvalidOtpCode);
    }
  }
}

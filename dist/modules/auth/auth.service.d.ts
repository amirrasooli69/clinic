import { UserEntity } from "../user/entity/user.entity";
import { Repository } from "typeorm";
import { OtpEntity } from "../user/entity/otp.entity";
import { CheckOtpDto, SendOtpDto } from "./dto/otp.dto";
import { JwtService } from "@nestjs/jwt";
import { TokensPayload } from "./types/payload";
import { PublicMessage } from "src/common/enum/message.enum";
export declare class AuthService {
    private userRepository;
    private otpRepository;
    private jwtService;
    constructor(userRepository: Repository<UserEntity>, otpRepository: Repository<OtpEntity>, jwtService: JwtService);
    sendOtp(otpDto: SendOtpDto): Promise<{
        message: PublicMessage;
        code: string;
    }>;
    checkOtp(otpDto: CheckOtpDto): Promise<{
        accessToken: string;
        refreshToken: string;
        message: PublicMessage;
    }>;
    checkMobile(mobile: string): Promise<void>;
    createOtpForUser(user: UserEntity): Promise<string>;
    makeTokensForUser(payload: TokensPayload): {
        accessToken: string;
        refreshToken: string;
    };
    validateAccessToken(token: string): Promise<UserEntity>;
}

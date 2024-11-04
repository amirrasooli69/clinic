import { AuthService } from "./auth.service";
import { CheckOtpDto, SendOtpDto } from "./dto/otp.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    sendOtp(otpDto: SendOtpDto): Promise<{
        message: import("../../common/enum/message.enum").PublicMessage;
        code: string;
    }>;
    checkOtp(otpDto: CheckOtpDto): Promise<{
        accessToken: string;
        refreshToken: string;
        message: import("../../common/enum/message.enum").PublicMessage;
    }>;
}

import { OtpEntity } from "./otp.entity";
export declare class UserEntity {
    id: number;
    first_name: string;
    last_name: string;
    mobile: string;
    mobile_verify: boolean;
    role: string;
    otpId: number;
    otp: OtpEntity;
}

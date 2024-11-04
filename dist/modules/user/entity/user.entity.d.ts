import { OtpEntity } from "./otp.entity";
export declare class UserEntity {
    id: number;
    first_name: string;
    last_name: string;
    mobile: string;
    mobile_verify: boolean;
    otpId: number;
    otp: OtpEntity;
}

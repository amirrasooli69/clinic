import { UserEntity } from "./user.entity";
export declare class OtpEntity {
    id: number;
    userId: number;
    clinicId: number;
    code: string;
    expires_in: Date;
    user: UserEntity;
}

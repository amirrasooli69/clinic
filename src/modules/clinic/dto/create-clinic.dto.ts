import { ApiProperty } from "@nestjs/swagger";
import { IsMobilePhone, Length } from "class-validator";

export class CreateClinicDto {
    @ApiProperty()
    @Length(3,30)
    first_name: string;
    @ApiProperty()
    @Length(3,30)
    last_name: string;
    @ApiProperty()
    @IsMobilePhone("fa-IR")
    mobile: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    categoryId: number;
    @ApiProperty()
    status: string
    @ApiProperty()
    confirmed: Date;
}

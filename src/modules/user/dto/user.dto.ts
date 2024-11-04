import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    firest_name: string;
    @ApiProperty()
    last_name: string;
    @ApiProperty()
    mobile: string;
}
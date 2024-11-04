import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiPropertyOptional()
    first_name: string;
    @ApiPropertyOptional()
    last_name: string;
    @ApiProperty()
    mobile: string;
}
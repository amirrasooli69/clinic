import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { RoleUser } from "../../../common/enum/role.enum";

export class CreateUserDto {
  @ApiPropertyOptional()
  first_name: string;
  @ApiPropertyOptional()
  last_name: string;
  @ApiProperty()
  mobile: string;
  @ApiPropertyOptional()
  role: string;
}

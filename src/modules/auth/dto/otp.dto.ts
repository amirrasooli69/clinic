import { ApiProperty } from "@nestjs/swagger";
import {IsMobilePhone, IsString, Length} from "class-validator";
import { BadRequestMessage } from "src/common/enum/message.enum";

export class SendOtpDto {
  @ApiProperty()
  @IsMobilePhone("fa-IR", {}, {message: BadRequestMessage.InvalidMobileNumber})
  mobile: string;
}

export class CheckOtpDto {
  @ApiProperty()
  @IsMobilePhone("fa-IR", {}, {message: BadRequestMessage.InvalidMobileNumber})
  mobile: string;
  @ApiProperty()
  @IsString()
  @Length(5, 5, {message: BadRequestMessage.InvalidMobileNumber})
  code: string;
}

import {IsMobilePhone, IsString} from "class-validator";
import { BadRequestMessage } from "src/common/enum/message.enum";

export class SignupDto {
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
  @IsMobilePhone(
    "fa-IR",
    {},
    {message: BadRequestMessage.InvalidMobileNumber}
  )
  mobile: string;
}


import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsUrl()
  avatar: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}

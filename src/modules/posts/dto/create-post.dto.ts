import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID, Length } from "class-validator";

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @IsUUID()
  author: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(1, 121)
  content: string;
}

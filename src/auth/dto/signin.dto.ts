import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  NotContains,
} from 'class-validator';

export class SignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @NotContains(' ')
  @Length(6, 100)
  password: string;

  @IsOptional()
  username: string;

  @IsBoolean()
  rememberMe: boolean;
}

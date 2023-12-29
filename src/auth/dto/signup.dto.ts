import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  NotContains,
} from 'class-validator';

export class SignUpDto {
  @Length(3, 50)
  fullName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(/^[a-z0-9_.-]{3,17}$/, {
    message:
      "Username can only contain lowercase, numbers, '_', '-', and '.' with min 3 to max 17 length",
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @NotContains(' ')
  @Length(6, 100)
  password: string;
}

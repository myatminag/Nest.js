import { Injectable } from '@nestjs/common';

// Local Files
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  async signIn(signIn: SignInDto) {
    return signIn;
  }

  async signUp(signUp: SignUpDto) {
    return signUp;
  }
}

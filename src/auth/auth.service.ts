import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SignupInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.type';
import { UsersService } from 'src/users/users.service';
import { LoginInput } from './dto/inputs';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    async signup( signupInput: SignupInput ): Promise<AuthResponse> {
        const user = await this.usersService.create(signupInput);

        //TODO: JWT
        const token = 'ABC123';

        return { token, user }
    }

    async login( loginInput: LoginInput ): Promise<AuthResponse> {
        const { email, password } = loginInput;
        const user = await this.usersService.findOneByEmail( email );

        if( !bcrypt.compareSync(password, user.password) ){
            throw new BadRequestException('Email / Password do not match');
        }

        //TODO: JWT
        const token = 'ABC123';
        return { token, user }
    }

}

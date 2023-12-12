import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { JwtauthGuard } from './guards/jwt-auth.guard';

import { LoginInput, SignupInput } from './dto/inputs';
import { AuthResponse } from './types/auth-response.type';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from '../users/entities/user.entity';

@Resolver()
export class AuthResolver {

  constructor(
    private readonly authService: AuthService
  ) {}

  @Mutation( () => AuthResponse , { name: 'signup'})
  async signup( @Args('signupInput') signupInput: SignupInput) : Promise<AuthResponse> {
    return this.authService.signup( signupInput)
  }

  @Mutation( ()=> AuthResponse ,{ name: 'login'})
  async login(
    @Args('loginInput') loginInput: LoginInput
  ) : Promise<AuthResponse>{
    return this.authService.login(loginInput);
  }

  @Query( () => AuthResponse, {name: 'revalidate'})
  @UseGuards(JwtauthGuard)
  revalidateToken(
    @CurrentUser() user: User
  ): AuthResponse {
    //return this.authService.revalidateToken(  );
    console.log('revalidateToken, user:', user);
    
    throw new Error('No implementado');
  }
}

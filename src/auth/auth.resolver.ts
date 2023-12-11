import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignupInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.type';
import { LoginInput } from './dto/inputs';
import { UseGuards } from '@nestjs/common';
import { JwtauthGuard } from './guards/jwt-auth.guard';

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
    //@CurrentUser user: User
  ): AuthResponse {
    //return this.authService.revalidateToken(  );
    throw new Error('No implementado')
  }
}

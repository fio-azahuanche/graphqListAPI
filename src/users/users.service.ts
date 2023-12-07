import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { SignupInput } from 'src/auth/dto/inputs/signup.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  //es lo que Nest utiliza para generar o registrar mensajes informativos, de depuración, advertencias o errores durante la ejecución de la aplicación
  private logger= new Logger();
  
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(signupInput: SignupInput): Promise<User> {
    try{
      const newUser = this.usersRepository.create({
        ...signupInput,
        password: bcrypt.hashSync( signupInput.password,10 )
      });
      return await this.usersRepository.save(newUser);
    } catch (error) {
      this.handleDBErrors( error );
      throw new BadRequestException('Algo salió mal');
    }
  }

  async findAll() : Promise<User[]> {
    return [];
  }

  async findOneByEmail(email: string) : Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({email})
    } catch (error) {
      throw new NotFoundException(`${email} not found`)
      //this.handleDBErrors({
        //code: 'error-001',
        //detail: `${email} not found`
      //})
    }
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  block(id:string): Promise<User> {
    throw new Error(`block method not implemented`);
  }

  //'never' significa que cuando se ingresa a este metodo jamas retorna nada
  private handleDBErrors( error: any): never {

    if( error.code = '23505') {
      throw new BadRequestException( error.detail.replace('Key','') );
    }

    if( error.code = 'error-001' ) {
      throw new BadRequestException( error.detail.replace('Key','') );
    }

    this.logger.error(error);

    throw new InternalServerErrorException('Please check server logs')

  }
}

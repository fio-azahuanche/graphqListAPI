import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/users/entities/user.entity";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { AuthService } from "../auth.service";

// Definir un servicio inyectable para la estrategia JWT
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService,
        configService: ConfigService
    ) {
        // Llamar al constructor de la clase base (PassportStrategy) con opciones de configuración
        // 'super' se utiliza para llamar al constructor de la clase base (superclase, en este caso PassportStrategy) en programación orientada a objetos.
        super({
            secretOrKey: configService.get('JWT_SECRET'), // Clave secreta para firmar/verificar el token
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() // Extracción del token de la cabecera de autorización
        });
    }

    // Método para validar y decodificar el payload del token
    async validate(payload: JwtPayload): Promise<User> {

        const { id } = payload;

        const user = await this.authService.validateUser(id);
        
        
        return user;
    }
}

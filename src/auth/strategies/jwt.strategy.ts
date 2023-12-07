import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/users/entities/user.entity";

// Definir un servicio inyectable para la estrategia JWT
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
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
    async validate(payload: any): Promise<User> {
        console.log({ payload }); // Mostrar el payload en la consola (puede ser útil para propósitos de depuración)

        // En este ejemplo, se lanza una excepción no autorizada si la validación no tiene éxito
        throw new UnauthorizedException('Token not valid');
    }
}

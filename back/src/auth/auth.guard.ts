//autenticación con guardianes
import {CanActivate, ExecutionContext, Injectable, UnauthorizedException,} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}//tenemos construido el servicoi con JWT 

    async canActivate(context: ExecutionContext): Promise<boolean> {//Creamos una función asincrona que se llama "SE PUEDE ACTIVAR" que va a requerir un contexto de ejecución  (como navegador, ...
        //..informacion del body, informacion de autenticaion que se pase por medio del cliente servidor. Ademas la PROMESA que va a devolver es booleana) 
    const request = context.switchToHttp().getRequest();//creamos una constante que se va a llamar (request) donde vamos a tomar el pedido del contexto
    const token = this.extractTokenFromHeader(request);//vamos a hacer el token 
    if (!token) {//si no hay token que tiere un error de autenticacion 
        throw new UnauthorizedException();
    }
    try {//si sí hay token entonces VA A IN  TENTAR  ...
        const payload = await this.jwtService.verifyAsync(//...VERIFICAR ASINCRONICAMENTE EL TOKEN
        token,//SE LE PASA EL TOKEN 
        {
            secret: jwtConstants.secret//SE LE PASA LA CLAVE SECRETA
        }//SI ES ASI SE VA A GUARDAR EN LA CONSTANTE (PAYLOAD)
        );

        request['user'] = payload;//el usuario que va a tener es el (payload)
    } catch {
        throw new UnauthorizedException();
    }
    return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {//depende si está el token o no nos devuelve un sstring o un undefined
    const [type, token] = request.headers.authorization?.split(' ') ?? [];//tenemos al autorizacion separada en partes separadas por espacion...
    return type === 'Bearer' ? token : undefined;//...3en un espacio va a estar el token y en el otro el tipo de token
    }
}
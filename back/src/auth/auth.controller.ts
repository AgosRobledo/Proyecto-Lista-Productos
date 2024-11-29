//decorar con el controlador la ruta de autenticacion 
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth') 
export class AuthController {//
constructor(private authService: AuthService) {}// en la clase vamos a contruir un servicio privado de autenticación

@HttpCode(HttpStatus.OK)//podemos ignorarlo no hace falta que valla | nos va a verfificar si esta okey HttpCode(HttpStatus.OK)
@Post('login')//Post(agregar/crear) en la ruta login| reemplazo de un parámetro
signIn(@Body() signInDto: Record<string, any>) {//el parametro va a ser el id, el body va a ser el dto, signInDto-->nosotros le dimos ese nombre
    return this.authService.signIn(signInDto.id, signInDto.username, signInDto.password);//vamos a llamr al servicio (authService) y al singIN
}

@UseGuards(AuthGuard)//usamos el decorador (UseGuards)  para llmar al ((AuthGuard)) 
@Get('profile')
getProfile(@Request() req) {
    return req.user;
}
}
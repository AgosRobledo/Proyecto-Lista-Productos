
import { Injectable} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async signIn(id:number, username: string, pass: string): Promise<{ access_token: string }> {//devuelve una promesa que es un token
    const user = await this.userService.findOne(id);
    const payload = { sub: user.id, user: user.user };//la informacion del usuario que me va a brindar
    return {
        access_token: await this.jwtService.sign(payload, { 
            secret: jwtConstants.secret,
            expiresIn: '1h' 
        })//nos devuelve el token
    };
    }
}

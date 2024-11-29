import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';


@Module({
  imports: [
    JwtModule.register({
      global: true,//que sea global al proyecto nuesto
      secret: jwtConstants.secret,//la clave secreta va a estar en este archivo
      signOptions: { expiresIn: '1h' },//tiempo en que v a expirar el token
    }),
    UserModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

//es el INICIO de los archivos 
//LLAMA APP.CONTROLLER Y APP.SERVICE, este ultimo relacionado a app.controller.spec-> que es para hacer testing
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entities';
import { AuthModule } from './auth/auth.module';
import { ProductoController } from './producto/producto.controller';
import { Producto } from './producto/entities/producto.entity';
import { ProductoModule } from './producto/producto.module';


@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3305,
    username: 'root',
    password: 'estudiantes2020',
    database: 'crud',
    entities: [User, Producto],
    synchronize: true,
}),UserModule, AuthModule, ProductoModule], 
  controllers: [AppController, ProductoController],
  providers: [AppService],
})
export class AppModule {}

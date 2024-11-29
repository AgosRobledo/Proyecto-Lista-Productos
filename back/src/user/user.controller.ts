import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Controller('user')                                                                                                                //nombre de la ruta osea del controlador 

export class UserController {// construimos una clase de seervicio
  constructor(private readonly userService: UserService) {}//creamos la instancia del servicio PRIVETE:privada y REDONLY:solo lectuna, no podemos modificar el service| userService:instancia y  
  //UserService llama al objeto, a la clase original


  @Post()                                                                                                                              //ruta: para crear
  async create(@Body() createUserDto: CreateUserDto) {//body, lo que viene después es el cuerpo del 
    return this.userService.create(createUserDto);                                                                                //el DECORADOR BODY: dentro del json que captura,, la parte del cuerpo que lo 
    
  }
//ASYNC es para procesar en orden las peticiones y no se acumulen o tropiecen
//el METODO CREATE viene del service y la funcion create


  @Get()
  async findAll() {
    return this.userService.findAll();
  }



  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  

  @Put(':id')
  update(@Param('id') id: string,
  @Body() updateUserDto: UpdateUserDto,//todos los datos que se van a cambiar del viejo al nuevo
) {
    return this.userService.update(+id, updateUserDto); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post('validate') // Ruta para validar el usuario
    async validateUser(@Body() body: { username: string; password: string }) {
        return this.userService.validateUser(body.username, body.password);
    }
    
}
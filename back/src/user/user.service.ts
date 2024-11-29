//Le da propiedades especiales para el controller 
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()//DECORADOR: para que pueda ser inyectada en el controller. Le da funcionalidades especiales para el controller
export class UserService {//
    @InjectRepository (User)                                                                                                     //inyectamos el repositorio USER ENTITY (BASE DE DATOS)
    private userRepository: Repository <User>//Llamamos al repositorio y el tipo repositorio objeto del typeorm usando de base a la carpeta user

    public async create(createUserDto: CreateUserDto) {                                                                          //usar la libreria bycrip * importar todo lo que está en la libreria. Acá hasheamos la contraseña
    const saltRounds = 10;                                                                                                            //constante, 10 rondas y sal agregado para reforzar la incriptación
    try {//llamamos a la base de datos e INTENTAMOS HACER EL HASHEO
        const hashedPassword = await bcrypt.hash(createUserDto.pass, saltRounds);                                                   //CONSTANTE mas el pass hasheado, AWAI:va a esperar a que bcryp hashee la contraseña atravez del (createUserDto.pass "pass en texto plano" --> es la contraseña normal) y las rondas que va  a tener que dar
        var NewDTO : CreateUserDto;                                                                                                 //crea una nueva instancia del DTO porque este tiene el pass viejo "pass en texto plano"
        NewDTO = {                                                                                                                       //acá hace un DTO con el pass hasheado
            user:createUserDto.user,//donde vamos a tener el mismo usuario y...
            pass:hashedPassword//va a cambiar la contraseña, pasa de texto plano a hasheada
        }
        console.log(NewDTO)
        await this.userRepository.save(NewDTO);//hacemos otra funcion asincrona donde el repositorio GUARDE el nuevo objeto a la tabla y...
        return { 
            statusCode:200,
            msg: 'Se realizó con éxito la inserción.',
        };
    }
    catch (error){
        return new BadRequestException(error);//o que refleje un error que falla algo que peude ser en el hasheo (const hashedPassword = await bcrypt.hash(createUserDto.pass, saltRounds))o en el repositorio cuando guarda (var NewDTO : CreateUserDto;)
    }
    }

    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {//Funcion asincrona que va a retornar un valor booleano
        return await bcrypt.compare(password, hashedPassword);//de si la comparacion es verdadera o falsa del (password, hashedPassword)atraves de una verificaion interna de la libreria (bcrypt.compare)
    }


    public async findAll() {//tenemos una funcion publica y asincronica llamada finoll COINCIDEN CON EL NOMBRE DEL SERVICE
        var resultado: any//va a crear una variable que se llama resultado tipo:cualquiera
        try {
            resultado = await this.userRepository.find();//va a esperar que el repositorio encuentre todos los registros que tenga guardada la base de datos
            return resultado;//y despues la va a retornar
    }
    catch (error){
        return new BadRequestException(error);
    }
    }

    public async findOne(id: number) {//luego tenemos findone donde va a agarrer el ID y va a buscar ...
        var resultado: any
        try {
            resultado = await this.userRepository.findOne({where: {id: id}});//...el registro que coinsida
            return resultado;//y lo va a devolver
        }
        catch (error){
            return new BadRequestException(error);
        }
        }

    async update (id:number, updateuserdto: UpdateUserDto){//UpdateUserDto es el BODY: es el body en forma de DTO
        try {//PORQUE ESTAMOS LLAMANDO A LA BASE DE DATOS| vamos a INTENTAR una función asyncrona en donde ....
            await this.userRepository.createQueryBuilder()//llamamos al repositorio
            .update(User)//...voy a actualizar el registro de usuarios...
            .set({user: updateuserdto.user,//...voy a setear a user 
                pass: updateuserdto.pass
            })
            .where("id = :id", {id:id})//cuando cumpla las propiedades "id = :id", {id:id}
            .execute();//ejecutamos la cuery (busqueda) de arriba (update,set,where)
            return {
                statusCode: 200,
                msg: 'Se realizó con éxito la modificación',
            };

        }
        catch (error){
            return new BadRequestException(error);
        }
    }


    async remove(id: number) {
        try{
            await this.userRepository.delete(id);//llamar al repositorio y elimine el id que le mandamos
            return {
                statusCode:200,
                msg: 'Se realizó con éxito la eliminación'
            };
        }
        catch (error){
            return new BadRequestException(error);// o nos devuelva un error 
        }
    }

    public async validateUser(username: string, password: string): Promise<{ valid: boolean }> {
        const user = await this.userRepository.findOne({ where: { user: username } }); // Busca al usuario por nombre de usuario

        if (!user) {
            return { valid: false }; // Si el usuario no existe, devuelve falso
        }

        const isPasswordValid = await this.comparePasswords(password, user.pass); // Compara la contraseña
        return { valid: isPasswordValid }; // Devuelve el resultado de la comparación
    }

}
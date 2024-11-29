//aca pasamos los elementos que queremos que puedan editarse puede ser unicamente pass o user o pueden ser ambos
//va a ser llamado desde user.service update
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    user:string;
    pass:string;
}
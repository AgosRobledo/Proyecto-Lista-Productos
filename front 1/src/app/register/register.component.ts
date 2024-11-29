import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  register!: FormGroup;

  constructor(private backendservice: BackendService, private router: Router){
  
}

  ngOnInit(): void {
    this.register = new FormGroup({
      nombre: new FormControl(''),
      contraseña: new FormControl(''),
      contraseña_confirmada: new FormControl('')
      });
  }

  onSubmit(): void {
    if (this.register.valid) {
      const {nombre, contraseña, contraseña_confirmada} = this.register.value
      if(contraseña === contraseña_confirmada){
        this.backendservice.enviarDatos({user: nombre, pass: contraseña}).subscribe(
          response => {
            console.log('Datos enviados con éxito:', response);
            this.router.navigate(["login"]);
            alert("Se ha registrado con éxito")
          }
        );

      } else {
        alert('Las contraseñas no coinciden');
      }
    } else {
      alert('Formulario no válido');
    }
  }
  
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Cambié `styleUrl` a `styleUrls`
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: BackendService, private router: Router) {}

  onSubmit() {
    this.authService.validateUser(this.username, this.password).subscribe(
      response => {
        if (response.valid) {
          // Navegar a la página principal u otra ruta
          this.router.navigate(['/producto']);
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      },
      error => {
        console.error('Error de validación', error);
        this.errorMessage = 'Error al intentar validar usuario';
      }
    );
  }
}


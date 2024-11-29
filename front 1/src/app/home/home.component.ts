import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  recetas = [
    {
      titulo: 'Rogel',
      descripcion: 'Harina, Azucar, Huevo, Vainillin, Dulce de leche.',
      imagen: 'assets/Torta Rogel _ Lucia Paula.jpg',
      ingredientes: ['500 g de harina 0000', '1 pizca de sal', '150 g de manteca', '3 yemas de huevo', '1 huevo entero', '150 ml de agua tibia', '1 cucharadita de extracto de vainilla', '800 g de dulce de leche repostero', '', 'Para merengue:', '3 claras de huevo', '200 g de azúcar', '80 ml de agua'],
      preparacion: [
        'Tamizar la harina y agrega una pizca de sal.', 
        'Incorpora la manteca a temperatura ambiente .',
        'Añade las yemas, el huevo entero y el extracto de vainilla.',
        'Vierte el agua tibia de a poco y amasa hasta formar una masa suave y lisa.',
        'Cubre la masa con un paño y déjala reposar durante 30 minutos.',
        'Divide la masa en 8 a 10 porciones y estira cada una bien fina con un palo de amasar.',
        'Coloca cada disco en una bandeja y pincha la superficie con un tenedor para evitar que se infle.',
        'Cocina los discos en el horno precalentado a 180°C durante 8-10 minutos o hasta que estén dorados. Deja enfriar.',
        'Para el merengue: En una cacerola, calienta el azúcar y el agua hasta que el almíbar alcance 118°C.', 
        'Mientras tanto, bate las claras de huevo a punto nieve.', 
        'Vierte el almíbar caliente en forma de hilo sobre las claras mientras sigues batiendo.', 
        'Continúa batiendo hasta que el merengue esté firme y brillante.',
        'Armar el rogel, una tapa primero y arriba dulce de leche (dejar de último una tapa).',
        'Decorar con merengue'
      ]
    },
    {
      titulo: 'Chocotorta',
      descripcion: 'Chocolina, Dulce de Leche, Crema/Queso Crema.',
      imagen: 'assets/descarga (2).jpg',
      ingredientes: ['400 g de galletitas de chocolate (Chocolinas u otra marca similar)', '500 g de queso crema', '500 g de dulce de leche', '200 ml de leche o café (para mojar las galletitas)', 'Cacao en polvo o chocolate rallado para decorar (opcional)'],
      preparacion: [
        'En un bowl, mezcla el queso crema con el dulce de leche hasta obtener una crema homogénea y suave.', 
        'Reserva la crema en la heladera mientras avanzas con los otros pasos.',
        'Vierte la leche o el café en un recipiente.',
        'Sumerge rápidamente las galletitas de chocolate una por una para que se humedezcan sin deshacerse.',
        'Coloca una capa de galletitas mojadas en la base de un molde rectangular o cuadrado.',
        'Cubre las galletitas con una capa de la crema de dulce de leche y queso crema.',
        'Repite el proceso alternando capas de galletitas y crema hasta completar el molde (generalmente 3-4 capas). ',
        'Espolvorea cacao en polvo o chocolate rallado sobre la última capa de crema para darle un toque especial.'
      ]
    },
    {
      titulo: 'Lemon Pie',
      descripcion: 'Harina, Azucar, Huevo, Vainillin, Limón, Maicena',
      imagen: 'assets/Lemon Meringue Pie - La Cucina del Cuore.jpg',
      ingredientes: ['Para la masa:', '200 g de harina 0000', '100 g de manteca fría', '50 g de azúcar', '1 huevo', '1 pizca de sal', '','Para la crema de limón:', '3 yemas de huevo', '150 g de azúcar', '50 g de maicena', '250 ml de agua', 'Jugo y ralladura de 2 limones', '50 g de manteca', '', 'Para merengue:', '3 claras de huevo', '200 g de azúcar', '80 ml de agua'],
      preparacion: [
        'Pra la masa: En un bowl, mezcla la harina, la sal y el azúcar.',
        'Incorpora la manteca fría en cubos.',
        'Agrega el huevo y amasa hasta formar una masa suave.',
        'Envuelve la masa en film y deja reposar en la heladera por 30 minutos.',
        'Estira la masa y cubre un molde para tarta. Pincha la base con un tenedor.',
        'Cocina en horno precalentado a 180°C durante 15-20 minutos, o hasta que esté dorada.',
        'Para la crema de limon: En una cacerola, mezcla las yemas, el azúcar, la maicena, el agua y el jugo de limón.',
        'Lleva a fuego medio y cocina sin dejar de revolver hasta que espese.',
        'Retira del fuego, agrega la ralladura de limón y la manteca, y mezcla bien.',
        'Deja enfriar la crema antes de verterla sobre la base cocida.',
        'Para el merengue: En una cacerola, calienta el azúcar y el agua hasta que el almíbar alcance 118°C.', 
        'Mientras tanto, bate las claras de huevo a punto nieve.', 
        'Vierte el almíbar caliente en forma de hilo sobre las claras mientras sigues batiendo.', 
        'Continúa batiendo hasta que el merengue esté firme y brillante.'
        
      ]
    },
    {
      titulo: 'Tarta Frutilla',
      descripcion: 'Harina, Azucar, Huevo, Vainillin, Crema, Frutillas.',
      imagen: 'assets/frutillas.jpg',
      ingredientes: ['Para la masa:', '200 g de harina 0000', '100 g de manteca fría', '50 g de azúcar', '1 huevo', '1 pizca de sal', '', 'Para la crema pastelera:', '500 ml de leche', '4 yemas de huevo', '100 g de azúcar', '40 g de maicena', '1 cucharadita de esencia de vainilla', '', 'Para la cobertura:', '300 g de frutillas frescas', '100 ml de agua', '50 g de azúcar', '2 cucharadas de mermelada de frutilla (opcional)', '1 cucharadita de gelatina sin sabor'],
      preparacion: [
        'Preparar la masa: En un bowl, mezcla la harina, la sal y el azúcar.', 
        'Incorpora la manteca fría en cubos y mezcla con las manos hasta obtener una textura arenosa.',
        'Agrega el huevo y amasa hasta formar una masa suave.', 
        'Envuelve la masa en film y deja reposar en la heladera durante 30 minutos.',
        'Estira la masa y cubre un molde para tarta. Pincha la base con un tenedor.',
        'Hornea a 180°C por 15-20 minutos hasta que esté dorada. Deja enfriar.',
        'Preparar la crema chantillí: batir la crema de leche con 400 gramos de azucar.'
      ]
    },
    {
      titulo: 'Tiramisu',
      descripcion: 'Vainillas, Crema, Cafe, Leche, Cacao.',
      imagen: 'assets/tiramisu.jpg',
      ingredientes: ['Para la crema:', '500 g de queso mascarpone', '4 yemas de huevo', '4 claras de huevo', '100 g de azúcar', '200 ml de crema de leche', '', 'Para el armado:', '300 g de vainillas (bizcochos de soletilla)', '200 ml de café fuerte (enfriado)', '50 ml de licor de café o Amaretto (opcional)', 'Cacao amargo para espolvorear'],
      preparacion: [
        'Preparar la crema de mascarpone: En un bowl, bate las yemas con el azúcar hasta que la mezcla esté clara y espumosa.',
        'Agrega el mascarpone y mezcla suavemente hasta que se integre por completo.',
        'Incorpora la crema de leche batida a punto medio para darle más suavidad.',
        'En otro bowl, bate las claras a punto nieve e incorpóralas con movimientos envolventes a la mezcla de mascarpone.',
        'Prepara un café fuerte (opcional licor) y deja enfriar.',
        'Sumerge rápidamente las vainillas en el café, sin dejarlas empapar demasiado.',
        'Ir haciendo una capa de vainillas mojadas y otra con la crema',
        'Al final podrias decorarlo con cacao expolvoreado.'
      ]
    },
    {
      titulo: 'Marquise',
      descripcion: 'Harina, Azucar, Huevo, Vainillin, Cacao, Crema, Dulce de Leche.',
      imagen: 'assets/Torta de Brownie.jpg',
      ingredientes: ['Para el brownie:', '200 g de chocolate semiamargo', '200 g de manteca', '4 huevos (separados en claras y yemas)', '150 g de azúcar', '50 g de cacao amargo', '1 pizca de sal', '', 'Para la cobertura (opcional):', '200 ml de crema de leche', '150 g de chocolate para fundir'],
      preparacion: [
        'Derretir el chocolate a baño matia.',
        'Bate las yemas con la mitad del azúcar hasta que estén claras y espumosas.',
        'Incorpora la mezcla de chocolate derretido y mezcla bien.',
        'Montar las claras a punto nieve',
        'Integrar las claras a la mezcla',
        'Hornea durante 20-25 minutos. La marquise debe quedar húmeda en el centro.',
        'Dejar enfriar',
        'Agregarle arriba una capa generosa de dulce de leche',
        'Decorar con crema montada y chocolate en barra'
      ]

    }
  ];


  // Para mostrar detalles de la receta seleccionada
  recetaSeleccionada: any;

  verDetalles(receta: any) {
    this.recetaSeleccionada = receta; // Guardamos la receta seleccionada
  }

  cerrarDetalles() {
    this.recetaSeleccionada = null; // Limpiamos la receta seleccionada
  }

}
//export class HomeComponent {

//  constructor(private router: Router) {}

//  navigateToHome() {
//    this.router.navigate(['/']); // Navega a la ruta raíz (inicio)
//  }
//}


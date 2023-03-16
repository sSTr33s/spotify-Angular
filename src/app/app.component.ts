import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify';

  status: string | number = 0

  name: string = 'spotify'
  age: number = 28
  phone: null = null
  phone1: undefined = undefined
  datum: any //Puede ser cualquier cosa


  //Interfaz 
  car:CarModel = {
    brand: 'Ford',
    model: 'Mustang',
    year: 2017
  }

  car2:CarModel = {
    brand: 'Ford',
    model: 'Mustang',
    
  }

  listCars:Array<CarModel> =[{
    brand: 'Ford',
    model: 'Mustang',
    year: 2017
  },
  {
  brand: 'Ford',
  model: 'Mustang',
  year: 2017
  }
  ,
  {
    brand: 'Ford',
    model: 'Mustang',

  }
]
    
}
//Es un contrato con un tipo de datos 
interface CarModel {
  brand: string
  model: string
  year?: number
}

import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  mainMenu:{
    defaultOptions:Array<any>,
    accessLink:Array<any>
  }={defaultOptions:[],accessLink:[]}

  customOptions:Array<any>=[]

  /*
  linksMenu: Array<any> = [
    {
      name:'Home',
      icon:'uil uil-500px'
    },{
      name:'Buscar',
      icon:'uil uil-android'
    }
  ]*/

  constructor(private router:Router){}

  ngOnInit():void{
    this.mainMenu.defaultOptions = [

    {
      name: 'Home',
      icon: 'uil uil-estate',
      router: ['/', 'auth'],
      
    },
    {
      name: 'Buscar',
      icon: 'uil uil-search',
      router: ['/', 'tracks']
    },
    {
      name: 'Tu biblioteca',
      icon: 'uil uil-chart',
      router: ['/', 'favorites'],
      query: { hola: 'mundo' }
    }
  ]

  this.mainMenu.accessLink = [
    {
      name: 'Crear lista',
      icon: 'uil-plus-square'
    },
    {
      name: 'Canciones que te gustan',
      icon: 'uil-heart-medical'
    }
  ]

  this.customOptions = [
    {
      name: 'Mi lista º1',
      router: ['/']
    },
    {
      name: 'Mi lista º2',
      router: ['/']
    },
    {
      name: 'Mi lista º3',
      router: ['/']
    },
    {
      name: 'Mi lista º4',
      router: ['/']
    }
  ]
  }
  /*
  //http://localhost:4200/favorites?key1=value1&key2=value2
  goTo($event:any):any{
    this.router.navigate(['/','favorites'],{
      queryParams: {
        key1:'value1',
        key2:'value2'
      }
    });
    console.log($event)
  }*/

}

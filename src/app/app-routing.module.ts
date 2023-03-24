import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'auth',                                              //Necesitamos que las módules que importemos tengan rutas
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',                                          //Necesitamos que las módules que importemos tengan rutas
    component:HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

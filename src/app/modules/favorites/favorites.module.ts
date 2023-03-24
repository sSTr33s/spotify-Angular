import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponenetComponent } from './pages/favorites-componenet/favorites-componenet.component';


@NgModule({
  declarations: [
  
    FavoritesComponenetComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }

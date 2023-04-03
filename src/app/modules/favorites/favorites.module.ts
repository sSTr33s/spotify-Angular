import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponenetComponent } from './pages/favorites-componenet/favorites-componenet.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
  
    FavoritesComponenetComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }

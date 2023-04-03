import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponenetComponent } from './pages/favorites-componenet/favorites-componenet.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesComponenetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './componentes/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './componentes/play-list-body/play-list-body.component';
import { Router, RouterModule } from '@angular/router';
import { OrderListPipe } from './pipes/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
  declarations: [
    HeaderUserComponent,
    SideBarComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PlayListBodyComponent,
    PlayListHeaderComponent,
    HeaderUserComponent,
    SideBarComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    OrderListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { 
    
}

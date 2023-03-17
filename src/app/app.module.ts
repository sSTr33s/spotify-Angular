import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaPlayerComponent } from './shared/components/media-player/media-player.component';

@NgModule({
  declarations: [ //TODO: Declaraciones, componentes, directivas, pipes 
    AppComponent, MediaPlayerComponent
  ],
  imports: [//TODO: Solo se importan otros modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

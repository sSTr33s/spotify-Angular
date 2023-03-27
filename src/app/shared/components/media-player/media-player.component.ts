import { Component } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover:TracksModule={
    cover:' ',
    name:'Nombre Canción',
    album:'Album Canción',
    url:'',
    _id:1
  }

  constructor(){

  }

  ngOnInit() {

  }
}

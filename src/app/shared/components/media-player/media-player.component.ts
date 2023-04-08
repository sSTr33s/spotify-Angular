import { Component,OnInit,OnDestroy } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover:TracksModule={
    cover:' ',
    name:'Nombre Canción',
    album:'Album Canción',
    url:'',
    _id:1
  }
  
  listOberservs!: Array<Subscription>

  constructor(private multimediaService:MultimediaService){

  }

  ngOnInit() {
    const oberser1:Subscription=this.multimediaService.callback.subscribe(
      (response:TracksModule)=>{
        console.log('Recibiendo cancion...',response);
      }
    )

    this.listOberservs=[oberser1];
  }
  ngOnDestroy(): void {
      this.listOberservs.forEach(u=>u.unsubscribe());
  }
  
}

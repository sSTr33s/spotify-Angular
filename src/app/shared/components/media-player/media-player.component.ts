import { Component, OnInit, OnDestroy } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover!: TracksModule;

  state: string = 'paused'
  
  listOberservs$!: Array<Subscription>;

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit() {

    this.multimediaService.trackInfo$.subscribe((trackInfo) => {
      console.log('Debo reproducir esta canción', trackInfo);
      this.mockCover = trackInfo;
    });

    const observer1$=this.multimediaService.playerStatus$
    .subscribe(status=>{
      this.state = status
    });

    this.listOberservs$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listOberservs$.forEach(u => u.unsubscribe())
    console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');
  }
  /*
  ngOnInit() {
    const oberser1: Subscription = this.multimediaService.callback.subscribe(
      (response: TracksModule) => {
        console.log('Recibiendo cancion...', response);
      }
    );

    this.listOberservs = [oberser1];
  }
  ngOnDestroy(): void {
    this.listOberservs.forEach((u) => u.unsubscribe());
  }*/
}

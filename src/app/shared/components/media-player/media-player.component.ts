import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');

  mockCover!: TracksModule;

  state: string = 'paused'

  listOberservs$!: Array<Subscription>;

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit() {

    this.multimediaService.trackInfo$.subscribe((trackInfo) => {
      console.log('Debo reproducir esta canción', trackInfo);
      this.mockCover = trackInfo;
    });

    const observer1$ = this.multimediaService.playerStatus$
      .subscribe(status => {
        this.state = status
      });

    this.listOberservs$ = [observer1$]
  }

  handlePosition(event: MouseEvent): void {

    const elNative: HTMLElement = this.progressBar.nativeElement;

    const { clientX } = event

    const { x, width } = elNative.getBoundingClientRect();

    const clickX = clientX - x;
    
    const percentageFromX = (clickX * 100) / width

    console.log(`Click(x): ${clientX} p Width: ${width} p Width Initial: ${x} PORCENTAGE: ${percentageFromX}`);

    this.multimediaService.seekAudio(percentageFromX);

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

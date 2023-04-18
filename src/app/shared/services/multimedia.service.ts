import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TracksModule } from '../../core/models/tracks.model';

@Injectable({
  providedIn: 'root',
}) //

export class MultimediaService {
 
  callback: EventEmitter<any> = new EventEmitter<any>();

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  public audio!: HTMLAudioElement;

  constructor()
  {
    this.audio = new Audio();
    this.trackInfo$.subscribe((track: TracksModule) => {
      if (track) {
        this.setAudio(track);
      }
    });
  }

  private setAudio(track: TracksModule): void 
  {
    this.audio.src = track.url;
    this.audio.play();
  }
}

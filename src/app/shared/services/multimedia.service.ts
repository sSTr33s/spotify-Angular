import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TracksModule } from '../../core/models/tracks.model';

@Injectable({
  providedIn: 'root',
}) //

export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)

  public audio!: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();

    this.trackInfo$.subscribe((track: TracksModule) => {
      if (track) {
        this.setAudio(track);
      }
    });

    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private setPlayerStatus = (event: any) => {
    //console.table({ event });
    switch (event.type) {

      case 'play':
        this.playerStatus$.next('play');
        break;

      case 'playing':
        this.playerStatus$.next('playing');
        break;

      case 'ended':
        this.playerStatus$.next('ended');
        break;

      default:
        this.playerStatus$.next('paused')

    }
  }

  private calculateTime = () => {

    // console.log('reproduciendo');
    const { duration, currentTime } = this.audio;

    //console.table({ duration, currentTime });
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(currentTime, duration);
    this.setProcentage(currentTime, duration);
    
  }

  private setProcentage(currentTime: number, duration: number): void {
    //TODO duration ---> 100%
    //TODO currentTime ---> (x)
    //TODO (currentTime * 100) / duration

    this.playerPercentage$.next((currentTime*100)/duration);
  }

  private setTimeElapsed(currentTime: number): void {

    this.timeElapsed$.next(this.displayFormatedDuration(currentTime));
  }

  private setTimeRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;
    this.timeRemaining$.next(this.displayFormatedDuration(timeLeft));
  }

  private displayFormatedDuration(currentTime: number): string {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime / 60) % 60);

    let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${displayMinutes}:${displaySeconds}`;
  }

  private setAudio(track: TracksModule): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as DataRow from '../../../data/tracks.json'
import { TracksModule } from '@core/models/tracks.model';
@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTrackTrending$:Observable<TracksModule[]>=of([]);
  dataTrackRandom$:Observable<TracksModule[]>=of([]);

  constructor() {
    const {data}:any=(DataRow as any).default
    this.dataTrackTrending$=of(data)

    this.dataTrackRandom$=new Observable(
      (observer)=>{
        const newTrack:TracksModule={
          _id:9,
          name:"name",
          album:"album",
          url:"http",
          cover:"https://i.ytimg.com/vi/sOex5IBr8u0/maxresdefault.jpg"
        }
        setTimeout(()=>{
          observer.next([newTrack])
        },3500)
      }
    );
  }

}

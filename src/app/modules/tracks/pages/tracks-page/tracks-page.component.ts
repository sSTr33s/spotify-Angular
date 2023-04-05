import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit,OnDestroy{
  /*mockTrackList:Array<TracksModule>=[];
  
  ngOnInit(): void {
    //const {data}:any=(dataRaw as any).default;
    const {data}:any=(dataRaw as any).default;
      this.mockTrackList=data;
  }
  */

  tracksTrending!:Array<TracksModule>
  tracksRandom:Array<TracksModule>=[]

  listOberservers$!:Array<Subscription>

  constructor(private dataTrackT:TrackService){

  }
  ngOnInit(): void {
    const observer$1=this.dataTrackT.dataTrackTrending$.subscribe(
      response=>{
        this.tracksTrending=response
        this.tracksRandom=response
        console.log("Se ven las canciones: "+this.tracksTrending.length)
      }
    );

    const observer$2=this.dataTrackT.dataTrackRandom$.subscribe(
      response=>{
        this.tracksRandom=[...this.tracksRandom,...response]
        console.log("Una nueva cancione: " +this.tracksRandom.length)
      }
    );
    this.listOberservers$=[observer$1,observer$2]
  }

  ngOnDestroy(): void {
      this.listOberservers$.forEach(u=>u.unsubscribe)
  }
}

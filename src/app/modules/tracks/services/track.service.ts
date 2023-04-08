import { Injectable } from '@angular/core';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';

import * as DataRow from '../../../data/tracks.json'
import { TracksModule } from '@core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class TrackService {
  
  /*PROGRAMACION REACTIVA

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
*/
    private readonly URL=environment.api
      
    constructor(private httpClient:HttpClient){

    } 
    
    private skipById(listTracks:TracksModule[],id:number):Promise<TracksModule[]>{
      return new Promise((resolve, reject) =>{
        let fil=listTracks.filter(track => track._id!==id)
        resolve(fil);
      })
    }

    getAllMusic$():Observable<any>{
      return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        /*map( (rawData:any) =>{
          return rawData.data
        })
        */
        map(({data}:any) =>{
          return data.reverse()
        }
        ),map((dataInvertida) =>{
          return dataInvertida.filter((u:TracksModule)=>u.name.includes("("))
        }),
        catchError((err)=>{
          const {status,statusTest} = err
          console.log("Algo no va bien",[status,statusTest])
          return of([])
        })
      );
    }
    getAllRandom$():Observable<any>{
      return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(map(({data}:any)=>data));
    }
    
    getAllRandom2$():Observable<any>{
      return this.httpClient.get(`${this.URL}/tracks`).pipe(
        //Para trabajar con una promesa
        mergeMap(({data:d}:any) => this.skipById(d,2))
      )
    }
}

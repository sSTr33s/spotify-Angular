import { Component, Input, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json';
import { TracksModule } from '@core/models/tracks.model';
import { SearchService } from '../../services/search.service';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})

export class HistoryPageComponent implements OnInit{

  @Input() tracks!:Observable<any>
  
  constructor(private searchService:SearchService){
    
  }

  ngOnInit(): void {
  }

  receivedParent(value:string):void{
    console.log('Estoy en el padre: ',value)

    this.tracks=this.searchService.getMusicFilter$(value)
  }
  
  async receivedData2(value:string):Promise<any> {

    try{
      this.tracks=await firstValueFrom(this.searchService.getMusicFilter$(value))
    }catch(e){
      console.log('No Estoy en el padre: ',value)      
    }
  }
}
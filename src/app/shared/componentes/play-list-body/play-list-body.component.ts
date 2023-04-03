import { Component,Input } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {
  
  @Input() tracks:TracksModule[]=[];

  optionSort:{property:string|null,sort:string}={property:null,sort:'asc'}

  changeSort(property:string):void{
    const {sort} = this.optionSort;
    
    this.optionSort ={
      property,
      sort:sort==='asc'?'desc':'asc'
    }
  }
}

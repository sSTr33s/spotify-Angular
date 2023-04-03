import { Component,OnInit } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-favorites-componenet',
  templateUrl: './favorites-componenet.component.html',
  styleUrls: ['./favorites-componenet.component.css']
})
export class FavoritesComponenetComponent implements OnInit{
  tracks:TracksModule[]=[];
  
  ngOnInit(): void {
    const {data}:any=(dataRaw as any).default;
    this.tracks=data;
  }
}

import { Component,Input,OnInit } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
@Input() mode:'small'|'big'='small';
@Input() track!:TracksModule;

constructor(private asMultimediaService:MultimediaService){

}
ngOnInit() {
}

sendPlayer(track:TracksModule):void{
  console.log('Emisión de datos')
  this.asMultimediaService.callback.emit(track);
}

}

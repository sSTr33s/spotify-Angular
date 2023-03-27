import { Component, Input } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent {
  @Input() title:string=''
  @Input() mode: 'small'| 'big'='small'
  @Input() dataTracks: Array<TracksModule>=[]
}

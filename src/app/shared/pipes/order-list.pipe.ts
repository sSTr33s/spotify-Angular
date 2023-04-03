import { Pipe, PipeTransform } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>,args:string|null=null,sort:string="asc"): TracksModule[] {
      try{
        if(args===null){
          return value //Retorma la misma lista
        }else{
          const tmpList2=value.sort((o1,o2)=>
            o1[args]-o2[args]
          );
          const tmpList=value.sort((a,b)=>{
            if(a[args]<b[args]){   
              return -1
            }else if(a[args]>b[args]){
              return 1
            }else if(a[args]===b[args]){
              return 0
            }

            return 1
          });
          return (sort==="asc")?tmpList2:tmpList2.reverse();
        }
      }catch(err){
        console.log('something went wrong');
        return value;
      }
  }

}

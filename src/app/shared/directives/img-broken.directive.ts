import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() linkImgBroken!:string

  //Escuchar img y se dispara
  @HostListener('error') hadleError(): void{
    const img=this.elHost.nativeElement
    console.log('esta imagen reventó ->',this.elHost)
    img.src =this.linkImgBroken
  }
  
  constructor(private elHost:ElementRef) {
    console.log(this.elHost)
   }

}

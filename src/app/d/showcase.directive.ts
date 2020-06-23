import { Directive, Input, ElementRef, OnInit, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({
  selector: '[appShowcase]'
})
export class ShowcaseDirective implements OnInit {
  el:HTMLElement

  constructor(elRef:ElementRef) {
     this.el = elRef.nativeElement
     
   }
  ngOnInit(): void {
    this.el.style.color= this.color
  }

  @Input('clickCountColor')color: string;

  @HostListener('click') click(){
    // alert(`my colot is ${this.color}`)
    this.clickCountChnge.emit(`my colot is ${this.color} clickd`)
    this.clickd = !this.clickd
  }

  @Output()clickCountChnge = new EventEmitter<string>();

  @HostBinding('class.clickd') clickd: boolean

}

import { Directive, HostListener, ElementRef } from '@angular/core';
import { CounterService } from '../s/counter.service';

@Directive({
  selector: '[appAppHigclight]'
})
export class AppHigclightDirective {

  constructor(private el: ElementRef, private counterSVC:CounterService) { }

  @HostListener('click')onClickd(){
  //  this.el.nativeElement.style.backgroundColor = 'blue';
   this.counterSVC.clickCounter++
  }

}

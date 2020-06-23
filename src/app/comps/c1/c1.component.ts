import { Component, OnInit, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  arr = [1,2,3,4]

  constructor(private el: ElementRef) {

    el.nativeElement
   }
  

  ngOnInit(): void {
  }

}

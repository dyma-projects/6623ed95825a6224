import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit { 
  @ViewChild('myinput', {static: false}) public el: ElementRef<HTMLInputElement>;

  public valeur: string;

  change() {
    this.valeur =this.el.nativeElement.value
  }

  constructor() { 
  }
  ngOnInit() {
    
  }



}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public result: number;
  @Output() public changeResult: EventEmitter<number> = new EventEmitter<number>;

  public increment(resultat: number) {
    this.result++;    
    resultat = this.result;    
    this.changeResult.emit(resultat);
  }

  public decrement(resultat :number) {
    this.result--;
    resultat = this.result;
    this.changeResult.emit(resultat);
  }

  constructor() { }

  ngOnInit() {
  }

}

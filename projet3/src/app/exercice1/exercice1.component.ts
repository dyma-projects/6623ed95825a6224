import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  public result: number = 0;

  public changement(resultat: number): void {
    this.result = resultat;
  }

  constructor() {}

  ngOnInit() {}
}

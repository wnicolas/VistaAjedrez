import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  player1:String;
  player2:String;

  constructor() { }

  ngOnInit(): void {
  }

  salvarJugadores(j1: String,j2: String){
    this.player1=j1;
    this.player2=j2;
    alert('Bienvenidos: ' + this.player1+" y "+this.player2);
  }

}

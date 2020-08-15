import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  jugador1:String;
  jugador2:String;

  constructor() { }

  ngOnInit(): void {
  }

  salvarJugadores(){
    this.jugador1="Nicolas";
    this.jugador2="Cristian";
    console.log('Bienvenidos')
  }

}

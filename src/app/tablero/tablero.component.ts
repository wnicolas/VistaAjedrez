import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  player1:String;
  player2:String;

  fila0=[];
  fila1=[];
  fila2=[];
  fila3=[];
  fila4=[];
  fila5=[];
  fila6=[];
  fila7=[];

  llenarTablero(){
    for(var i=0;i<8;i++){
      this.fila0[i]=new Casilla(0,i);
      this.fila1[i]=new Casilla(1,i);
      this.fila2[i]=new Casilla(2,i);
      this.fila3[i]=new Casilla(3,i);
      this.fila4[i]=new Casilla(4,i);
      this.fila5[i]=new Casilla(5,i);
      this.fila6[i]=new Casilla(6,i);
      this.fila7[i]=new Casilla(7,i);
    }
  }
  columnas=[this.fila0,this.fila1,this.fila2,this.fila3,this.fila4,this.fila5,this.fila6,this.fila7];
  
  

  constructor() { }

  ngOnInit(): void {
    this.llenarTablero();
  }

  salvarJugadores(j1: String,j2: String){
    this.player1=j1;
    this.player2=j2;
    alert('Bienvenidos: ' + this.player1+" y "+this.player2);
  }

}
class Casilla{
  posi:number;
  posj: number;
  rojas:boolean;
  
  constructor(posi:number,posj:number) { 
    this.posi=posi;
    this.posj=posj;
    if((posi+posj)%2==0){
      this.rojas=true;
    }else{
      this.rojas=false;
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  player1:String;
  player2:String;
  turnoBlancas:boolean=true;
  figuraInicial: String;
  figuraFinal:String;

  statusInicial="No ha iniciado la posición inicial";
  statusFinal="No ha iniciado la posición final";
  contador=0; 

  //Declaracion de fichas
  rBlanca="♔";
  dBlanca="♕";
  tBlanca="♖";
  aBlanca="♗";
  cBlanca="♘";
  pBlanca="♙";

  rNegra="♚";
  dNegra="♛";
  tNegra="♜";
  aNegra="♝";
  cNegra="♞";
  pNegra="♟";

  vacia:String="";

  fila0=[];
  fila1=[];
  fila2=[];
  fila3=[];
  fila4=[];
  fila5=[];
  fila6=[];
  fila7=[];

  llenarTablero(){
    for(var j=0;j<8;j++){

      switch(j){
        case 0:
          this.fila0[j]=new Casilla(0,j,this.tNegra);
          this.fila7[j]=new Casilla(7,j,this.tBlanca);
          break;
        case 1:
          this.fila0[j]=new Casilla(0,j,this.cNegra);
          this.fila7[j]=new Casilla(7,j,this.cBlanca);
          break;
        case 2:
          this.fila0[j]=new Casilla(0,j,this.aNegra);
          this.fila7[j]=new Casilla(7,j,this.aBlanca);
          break;
        case 3:
          this.fila0[j]=new Casilla(0,j,this.dNegra);
          this.fila7[j]=new Casilla(7,j,this.dBlanca);
          break;
        case 4:
          this.fila0[j]=new Casilla(0,j,this.rNegra);
          this.fila7[j]=new Casilla(7,j,this.rBlanca);
          break;
        case 5:
          this.fila0[j]=new Casilla(0,j,this.aNegra);
          this.fila7[j]=new Casilla(7,j,this.aBlanca);
          break;
        case 6:
          this.fila0[j]=new Casilla(0,j,this.cNegra);
          this.fila7[j]=new Casilla(7,j,this.cBlanca);
          break;
        case 7:
          this.fila0[j]=new Casilla(0,j,this.tNegra);
          this.fila7[j]=new Casilla(7,j,this.tBlanca);
          break;
      }

      this.fila1[j]=new Casilla(1,j,this.pNegra);
      this.fila2[j]=new Casilla(2,j,this.vacia);
      this.fila3[j]=new Casilla(3,j,this.vacia);
      this.fila4[j]=new Casilla(4,j,this.vacia);
      this.fila5[j]=new Casilla(5,j,this.vacia);
      this.fila6[j]=new Casilla(6,j,this.pBlanca);
      
    }
  }
  columnas=[this.fila0,this.fila1,this.fila2,this.fila3,this.fila4,this.fila5,this.fila6,this.fila7];

  constructor() { }

  ngOnInit(): void {
    this.llenarTablero();
    this.figuraFinal="";
  }

  salvarJugadores(j1: String,j2: String){
    this.player1=j1;
    this.player2=j2;
    alert('Bienvenidos: ' + this.player1+" y "+this.player2);
    
  }
 
  coordenadasTablero:string="";

  coordenadaInicialI:number;
  coordenadaInicialJ:number;
  coordenadaFinalI:number;
  coordenadaFinalJ:number;

  EnviarCoordenadas(n:number,m:number){    

    if((this.contador)%2==0){ 
        this.coordenadasTablero="";
        this.coordenadaInicialI=n;
        this.coordenadaInicialJ=m;
        this.figuraInicial=this.columnas[n][m].figura;
        this.statusInicial="La posición inicial es: "+n+":"+m; 
        this.statusFinal="No ha iniciado la posición final"; 
        this.coordenadasTablero=`${n},${m}`;
        this.columnas[n][m]=new Casilla(n,m,this.vacia);
    }else{   
        this.coordenadasTablero=`${this.coordenadasTablero},${n},${m}`;
        this.coordenadaFinalI=n;
        this.coordenadaFinalJ=m;

    }     
    this.contador++;        
  }

  mover(validacionMovimiento:String){
    if(validacionMovimiento=="se puede mover"){
      this.figuraFinal=this.columnas[this.coordenadaFinalI][this.coordenadaFinalJ].figura;
      this.statusFinal="La posición final es: "+this.coordenadaFinalI+":"+this.coordenadaFinalJ; 
      this.statusInicial="No ha iniciado la posición inicial";
      this.columnas[this.coordenadaFinalI][this.coordenadaFinalJ].figura=this.figuraInicial;

      this.coordenadaFinalI=null;
      this.coordenadaFinalJ=null;

      if(this.turnoBlancas){
        this.turnoBlancas=false;
        document.getElementById("p2").style.backgroundColor="chartreuse";
        document.getElementById("p1").style.backgroundColor="transparent";
      }else{
        this.turnoBlancas=true;
        document.getElementById("p1").style.backgroundColor="chartreuse";
        document.getElementById("p2").style.backgroundColor="transparent";
      }

    }else{
      alert("Movimiento inválido")
      this.columnas[this.coordenadaInicialI][this.coordenadaInicialJ]=new Casilla(this.coordenadaInicialI,this.coordenadaInicialJ,this.figuraInicial);
    }
  }

}
class Casilla{
  posi:number;
  posj: number;
  rojas:boolean;
  figura:String;
  
  constructor(posi:number,posj:number,figura:String) { 
    this.posi=posi;
    this.posj=posj;
    this.figura=figura;

    if((posi+posj)%2==0){
      this.rojas=true;
    }else{
      this.rojas=false;
    }
  }
}

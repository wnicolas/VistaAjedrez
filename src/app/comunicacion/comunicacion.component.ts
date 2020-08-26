import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ComandoService } from '../comando.service';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent implements OnInit {

  resultado = "";
  jaqueBlanca="";
  jaqueNegra="";

  constructor(private http: ComandoService) { }

  @Input('coordenadasComunicacion') comando;
  @Output() eventoComunicacion=new EventEmitter();

  enviarComando() {
    this.http.respuestaLlamdoServlet(this.comando).subscribe((data: any) => {
      this.resultado = data.comando;
      this.jaqueBlanca=data.jaqueBlanca;
      this.jaqueNegra=data.jaqueNegra;
      if (this.resultado == "true") {

        this.eventoComunicacion.emit("se puede mover");

        //alert(this.resultado);
        if(this.jaqueBlanca=="true"){
          alert("Rey blanco en jaque");
        }

        if(this.jaqueNegra=="true"){
          alert("Rey negro en jaque");
        }
        
        
       
      } else if (this.resultado == "false") {

        this.eventoComunicacion.emit("no se puede mover");

      }
    });

  }

  ngOnInit(): void {

  }

}
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ComandoService } from '../comando.service';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent implements OnInit {

  comando = "Prueba";
  resultado = "";
  coordenadas="";

  constructor(private http: ComandoService) { }

  enviarComando() {
    this.http.respuestaLlamdoServlet(this.comando).subscribe((data: any) => {
      this.resultado = data.comando;
      if (this.resultado == "true") {
        alert(this.resultado);
        document.getElementById("resultado").innerHTML = "&#9816;";
      } else if (this.resultado == "false") {
        alert(this.resultado);
        document.getElementById("resultado").innerHTML = "&#9822;";
      }else{
        alert(this.resultado);
        document.getElementById("resultado").innerHTML = this.resultado;
      }
    });

  }

  ngOnInit(): void {

  }

}
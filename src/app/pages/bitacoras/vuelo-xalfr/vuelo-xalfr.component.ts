import { Component, OnInit } from '@angular/core';
import { BitacoraVuelo } from 'src/app/interfaces/bitVuelo.interfaces';
import { BitacoraVueloGral } from 'src/app/models/bitacorasVuelo/bitacoraVueloGral.models';
import { BitacoraVueloService } from 'src/app/services/bitacora-vuelo.service';
import { BusquedasService } from 'src/app/services/busquedas.service';


@Component({
  selector: 'app-vuelo-xalfr',
  templateUrl: './vuelo-xalfr.component.html',
  styles: [
  ]
})
export class VueloXalfrComponent implements OnInit {

  public totalVuelos: number=0;
  public xalfr:BitacoraVueloGral[]=[];
  public xalfrTemp:BitacoraVueloGral[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private bitacoraVueloServices:BitacoraVueloService ,private busquedaService:BusquedasService) { }

  ngOnInit(): void {

    this.cargarDatos();
  }


  cargarDatos(){
    this.cargando=true;
    this.bitacoraVueloServices.cargarBitVuelo2(this.desde,'lfr').subscribe(
      ({total,bitVuelos})=>{
        this.totalVuelos=total;
        this.xalfr=bitVuelos;
        this.xalfrTemp=bitVuelos;
        this.cargando=false;
      }
    );
  }


  cambiarPagina(valor:number){

    this.desde+=valor;

    if(this.desde<0){
      this.desde=0;
    }else if(this.desde>=this.totalVuelos){
      this.desde-=valor;
    }
    this.cargarDatos();
  }


  buscar(termino: string){
  
    if(termino.length===0){
      return this.xalfr=this.xalfrTemp;
    }

    this.busquedaService.buscarVuelo('xaLfr',termino).subscribe(
      resp=> {
        this.xalfr=resp;
      }
    );

    return;

  }

}

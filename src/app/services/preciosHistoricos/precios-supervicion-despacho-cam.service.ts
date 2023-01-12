import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioSupervicionDespachoCam, PrecioSupervicionDespachoCam, PrecioSupervicionDespachoCamForm } from 'src/app/models/precios/precioSupervicionDespachoCam.models';
import { environment } from 'src/environments/environment';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosSupervicionDespachoCamHistService {

  constructor(private http:HttpClient,private router:Router,private ngZone:NgZone) { }
  
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return{
      headers:{
        'x-token':this.token
      }
    }

  }


  cargarPrecios(desde:number=0) {

    const url = `${ base_url }/precio/supervicionDespachoCamHist?desde=${desde}`;
    return this.http.get<CargarPrecioSupervicionDespachoCam>( url, this.headers );        
  }

  crearPrecio(formData:PrecioSupervicionDespachoCamForm){
    return this.http.post(`${base_url}/precio/supervicionDespachoCamHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioSupervicionDespachoCam) {
    const url = `${ base_url }/precio/supervicionDespachoCamHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/supervicionDespachoCamHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

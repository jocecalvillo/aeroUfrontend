import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioMotores, PrecioMotores, PrecioMotoresForm } from 'src/app/models/precios/precioMotores.models';
import { environment } from 'src/environments/environment';


const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosMotoresHistService {

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

    const url = `${ base_url }/precio/motoresHist?desde=${desde}`;
    return this.http.get<CargarPrecioMotores>( url, this.headers );        
  }

  crearPrecio(formData:PrecioMotoresForm){
    return this.http.post(`${base_url}/precio/motoresHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioMotores) {
    const url = `${ base_url }/precio/motoresHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/motoresHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}
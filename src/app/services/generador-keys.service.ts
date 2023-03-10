import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LLaveRandom } from '../models/llave.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class GeneradorKeysService {

  constructor(private http:HttpClient,private router:Router,private ngZone:NgZone) { }

  generarId(){
    const url= `${ base_url }/random/generarCodigo`;
    return this.http.get<LLaveRandom>(url);
  }
}

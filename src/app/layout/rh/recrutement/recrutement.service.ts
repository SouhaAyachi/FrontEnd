import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecrutementService {

  constructor(private _http: HttpClient) { }

  recDelais(){
    return this._http.get("http://localhost:8092/Recrutement/delai").map(result => result);
  }

  nbEmbauche(){
    return this._http.get("http://localhost:8092/Recrutement/nbEmbauche").map(result => result);
  }

  evolutionNbEmbauche(s){
    return this._http.get("http://localhost:8092/Recrutement/getXY?mesure="+s).map(result => result);
  }
  sessions(){
    return this._http.get("http://localhost:8092/Recrutement/sessions").map(result => result);
  }

  nbRetraite(){
    return this._http.get("http://localhost:8092/Recrutement/getXY?mesure=retraite").map(result => result);
  }
  nbRetraiteParPoste(){
    return this._http.get("http://localhost:8092/Recrutement/getXYS").map(result => result);
  }
}

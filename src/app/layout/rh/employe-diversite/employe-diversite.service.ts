import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EmpDiversiteService {

  constructor(private _http: HttpClient) { }

  genreEmp() {
    return this._http.get("http://127.0.0.1:8092/EmpDiv/nbEmpParSexO")
      .map(result => result);
  }

  nbTotalEmp() {
    return this._http.get("http://localhost:8092/EmpDiv/returnValue?mesure=nb")
      .map(result => result);
  }
  nbEmpParCategorie(){
    return this._http.get("http://127.0.0.1:8092/EmpDiv/returnValueParQQChose?mesure=nb&dimension=categorie")
      .map(result => result);
  }

  ageMoyenEmp(){
    return this._http.get("http://127.0.0.1:8092/EmpDiv/returnValue?mesure=ageMoyen")
    .map(result => result);
  }
  ageMoyenParCategorie(){
    return this._http.get("http://localhost:8092/EmpDiv/returnValueParQQChose?mesure=ageMoyen&dimension=categorie")
      .map(result => result);
  }

  ancienneteeMoyenne(){
    return this._http.get("http://localhost:8092/EmpDiv/returnValue?mesure=anciennete")
    .map(result => result);
  }

  ancienneteParCategorie(){
    return this._http.get("http://localhost:8092/EmpDiv/returnValueParQQChose?mesure=anciennete&dimension=categorie")
      .map(result => result);
  }
  
  empParSex(mesure){
    return this._http.get("http://localhost:8092/EmpDiv/nbEmpParSexO?mesure="+mesure)
      .map(result => result);
  }

  EmpDiversiteParQQChose(mesure,dim){
    return this._http.get("http://localhost:8092/EmpDiv/returnValueParQQChose?mesure="+mesure+"&dimension="+dim)
      .map(result => result);
  }

  recDelais(){
    return this._http.get("http://localhost:8092/Recrutement/delai").map(result => result);
  }

  nbEmbauche(){
    return this._http.get("http://localhost:8092/Recrutement/nbEmbauche").map(result => result);
  }

}
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
}
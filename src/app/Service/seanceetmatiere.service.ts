import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeanceetmatiereService {
 private testeUrl='http://localhost:8081/enseignant/getby/logtari.joseph@prof.enicar.com';
 private baseUrl='http://localhost:8081/seance';
  constructor(private http:HttpClient) { }

  getEnseignantByEmail():Observable<any>{
    return this.http.get(`${this.testeUrl}`);
  }

  findSeanceByEnseignant(idEns:Number):Observable<any>{
    return this.http.get(`${this.baseUrl}/findByEns/${idEns}`);
  }
}

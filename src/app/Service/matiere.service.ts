import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matiere } from '../Model/Matiere';
@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private baseUrl='http://localhost:8081/matiere';
  constructor(private http:HttpClient) { }

 createMatiere(matiere:Matiere):Observable<any>{
  return this.http.post(`${this.baseUrl}`,matiere);
 }


  getListMatiere():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  deleteMatiere(id:Number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  getListMatofEtd(idetd:Number):Observable<any>{
    return this.http.get(`${this.baseUrl}/getmatiereFromAbs/${idetd}`);
  }


  getMatEtd(idetd:Number):Observable<any>{
    return this.http.get(`${this.baseUrl}/getlistmatieres/${idetd}`);
  }
}

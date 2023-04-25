import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groupe } from '../Model/Groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private baseUrl="http://localhost:8081/groupe";
  constructor(private http:HttpClient) { }


 createGroupe(groupe:Groupe):Observable<any>{
  return this.http.post(`${this.baseUrl}`,groupe);
 }

  getListGroupe():Observable<any>{
    return this.http.get(`${this.baseUrl}`);

  }

  getGroupeById(id:Number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteGroupe(id:Number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  addMatieresToGroupe(id:Number,idMat:Number[]){
    return this.http.post(`${this.baseUrl}/${id}/matieres`,idMat);
  }
}

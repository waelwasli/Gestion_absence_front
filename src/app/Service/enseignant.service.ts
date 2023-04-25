import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from '../Model/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
 private baseUrl="http://localhost:8081/enseignant";
  constructor(private http:HttpClient) { }

  createEnseignant(enseignant:Enseignant):Observable<any>{
    return this.http.post(`${this.baseUrl}`,enseignant);
  }

  getListEnseignant():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  
  deleteEnseignant(id:Number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

 getEnseignantById(id:Number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
 }
 
 updateEnseignant(id:Number,enseignant:Enseignant):Observable<any>{
  return this.http.put(`${this.baseUrl}/update/${id}`,enseignant);
 }


 getListGroupeByEnseignant(idEns:Number):Observable<any>{
       return this.http.get(`${this.baseUrl}/${idEns}/groupes`);
 }


 addGroupesToEnseignant(id:Number,idGrps:Number[]){
   return this.http.post(`${this.baseUrl}/${id}/groupes`,idGrps);
 }


  }


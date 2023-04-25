import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../Model/Etudiant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl="http://localhost:8081/etudiant";
  constructor(private http:HttpClient) { }

  createEtudiant(etudiant:Etudiant):Observable<any>{
    return this.http.post(`${this.baseUrl}`,etudiant);
  }

  getListofEtudiant():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  deleteEtudiant(id:Number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  getEtudiantById(id:Number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateEtudiant(id:Number,etudiant:Etudiant):Observable<any>{
    return this.http.put(`${this.baseUrl}/update/${id}`,etudiant);
  }
}

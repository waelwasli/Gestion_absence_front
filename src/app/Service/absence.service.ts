import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from '../Model/Absence';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private baseUrl="http://localhost:8081/absence"
  constructor(private http:HttpClient) { }

  createAbsence(absence:Absence):Observable<any>{
      return this.http.post(`${this.baseUrl}`,absence);
  }

  createAbsenceToEtdAndMat(absence:Absence,idEtd:Number,idMat:Number){
    return this.http.post(`${this.baseUrl}/ToEtd/${idEtd}/ToMat/${idMat}`,absence);
  }

  getNombreAbsence(idEtd:Number,idMat:Number):Observable<any>{
    return this.http.get(`${this.baseUrl}/absencesetud/${idEtd}/matiere/${idMat}`);
  }
}

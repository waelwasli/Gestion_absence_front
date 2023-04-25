import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seance } from '../Model/Seance';

@Injectable({
  providedIn: 'root'
})
export class CreationseanceService {
  private baseUrl='http://localhost:8081/seance';
  constructor(private http:HttpClient) { }

  createSeance(seance:Seance):Observable<any>{
    return this.http.post(`${this.baseUrl}`,seance);
  }
  getListSeance():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  addEnsToSeance(seance:Seance,ideEns:Number):Observable<any>{
      return this.http.post(`${this.baseUrl}/addEns/${ideEns}/ToSeance`,seance);
  }
}

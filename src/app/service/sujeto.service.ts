import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SujetoService {
  
  sujeto = new Subject<string>();
  

  constructor(private http : HttpClient) { }

  public obtenerData(sgtItems:number): Observable<any>{
    return this.http.get<any>(`https://api.escuelajs.co/api/v1/products?offset=${sgtItems}&limit=10`);
  }

}

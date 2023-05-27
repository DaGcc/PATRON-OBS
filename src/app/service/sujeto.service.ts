import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SujetoService {
  
  private URL: string = 'https://api.escuelajs.co/api/v1/products';
  sujeto = new Subject<string>();
  sujetoCambio = new Subject<any>();
  
  

  constructor(private http : HttpClient) { }

  public obtenerData(sgtItems:number): Observable<any>{
    return this.http.get<any>(`${this.URL}?offset=${sgtItems}&limit=10` );
  }

  public obtenerById(id: number): Observable<any>{
    return this.http.get<any>(`${this.URL}/${id}`);
  }

  public registrarData(product: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/`, product);
  }

  public actualizarData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.URL}/${id}`, data);
  }

  public eliminar(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`);
  }
}

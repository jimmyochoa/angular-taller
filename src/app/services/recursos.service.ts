import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foto } from '../interfaces/foto';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Foto[]> {
    return this.http.get<Foto[]>('https://api.jsonsilo.com/demo/b8fb7076-dcaa-4232-a3f3-e9f55f4d0acf');
  }
}

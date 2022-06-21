import { Employee } from './../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Url='https://localhost:44302/api/Employees';

  constructor(private http:HttpClient) { }

  getUsers():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.Url}/GetAll`);
  }
 Post(obj:Employee){
   return this.http.post<Employee>(`${this.Url}/save`,obj);
 }
 updateUser(id:number ,obj:any){
   return this.http.put<Employee>(`${this.Url}/update/`+ id,obj);
 }
 delete(id:number){
  return this.http.delete<Employee>(this.Url + '/delete/' + id);
 }
}

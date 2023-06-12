import { ErrorHandler, Injectable } from '@angular/core';
import { Employee } from '../Employee';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private apiServerUrl : string = 'http://localhost:8080/emp/'
  private imgServerUrl : string = 'http://localhost:8080/img/'
  employees: Employee[] = [];
  postResponse: any;
  successResponse: string | undefined;
  image: any;
  dbImage: any;

  constructor(private http:HttpClient) { 
  }

  

  addEmployee(employee : Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiServerUrl+'add',employee);
  }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiServerUrl+'get/all');
  }

  deleteEmployee(id : Number):Observable<Employee>{
    console.log(id)
    return this.http.delete<Employee>(this.apiServerUrl + 'delete/'+id);
  }

  uploadAction(imageFormData: FormData, id : Number) {
    return this.http.post(this.imgServerUrl + 'upload/'+id, imageFormData, { observe: 'response' });
  }

}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from './employee.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor (private employeeService : EmployeeService) {
    
  }

  ngOnInit():void{
  }

  employees: Employee[] = [];
  resultEmployees : Employee[] = this.employees;
  selected ?: Employee;

  
  onselect (employee : Employee) : void{
    this.selected = employee;
  }

  addEmployee(employee : Employee) : void{
    this.employeeService.addEmployee(employee).subscribe();
    window.location.reload();
  }

}

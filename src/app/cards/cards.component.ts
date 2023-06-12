import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employees/employee.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesComponent } from '../employees/employees.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Pipe, PipeTransform } from '@angular/core'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  employees : Employee[] = [];
  employee ?: Employee;
  uploadImage : File | undefined;

  ngOnInit():void{
    this.getEmployees();
  }

  constructor(private employeeService : EmployeeService,private router : Router, private dialog : MatDialog){

  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(data => this.employees=data);
  }

  deleteEmployee(id : Number){
    this.employeeService.deleteEmployee(id).subscribe();
    window.location.reload();
  }

  goUpdate(employeeToUpdate : Employee){
    this.dialog.open(PopUpComponent,{
      data : employeeToUpdate
    });
  }

  public onImageUpload(event:any) {
    this.uploadImage = event.target.files[0];
  }

  imageUploadAction(event : any,id: Number){
    this.uploadImage = event.target.files[0];
    const imageFormData = new FormData();
    imageFormData.append('image',this.uploadImage!, this.uploadImage!.name);
    this.employeeService.uploadAction(imageFormData, id).subscribe();
  }


  viewId(id : Number){
    console.log(id);
  }
}

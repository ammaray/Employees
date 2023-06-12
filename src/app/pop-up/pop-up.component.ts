import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../Employee';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit{

  employeeToUpdate : Employee |undefined;
  
  constructor(@Inject (MAT_DIALOG_DATA) public data : Employee){
    this.employeeToUpdate! = data;

  }
  ngOnInit(): void {
    
    }

}

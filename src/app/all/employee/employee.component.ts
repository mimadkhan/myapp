
import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public UserList : Employee[]=[];
  public objUser:Employee=new Employee();

  constructor(private dataSRV:DataService) { }

  ngOnInit(): void {
  this.getData();
  }

 getData(){
  this.dataSRV.getUsers().subscribe(
    (res) => {
      this.UserList = res;
           console.log(res);
    })
 }
 create(objUser:Employee){
   if(this.objUser.id === undefined || this.objUser.id ===0)
   {
     this.dataSRV.Post(objUser).subscribe(
       (res)=>{
         this.getData();
         this.newData();
         console.log('Data Created Successfully !')
         console.log(res);
       },
       (error)=>{
        console.log(error);
       } 
     )
   }
 }
 update(objUser:Employee){
   this.dataSRV.updateUser(objUser.id,objUser).subscribe(
     (res)=>{
       this.getData();
       console.log('Data Updated Successfully !')
     },
     (error)=>{
      console.log(error);
     }    
   );
 }
 delete(objUser:Employee){
  var deleteBtn = confirm('Do you want to delete ?');
  if (deleteBtn == true) {
    this.dataSRV.delete(objUser.id).subscribe(
      (res)=>{
        this.getData();
        console.log('data deleted successfully');
      },
      (error)=>{
          console.log(error);
      }
    )
  }
 }
 edit(objUser:Employee){
this.objUser=objUser;
 }
 onSave(){
   if(this.objUser.id==0){
     this.create(this.objUser);
     this.newData();
   }
   else{
     this.update(this.objUser);
     this.newData();
   }
 }
 newData(){
   this.objUser=new Employee();
 }
}

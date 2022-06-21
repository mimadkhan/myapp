import { MessageService } from './../../service/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class ChildTwoComponent implements OnInit {
  
  userName:string='MIK Safi';
  newValue: string='';

  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
    this.messageService.currentMessage.subscribe((res)=>{
      this.newValue = res;
    })
  }
   clickMe(){
     alert(this.userName + '\n This is child component 2')
   }
}

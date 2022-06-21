import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

 passValue:string='';
 receiver:string='';
 newValue:string='';
 compExist:boolean=true;

  constructor(private messageSrv : MessageService) { }
  
  ngOnInit() {
    this.messageSrv.currentMessage.subscribe((res)=>{
      this.newValue = res;
      console.log(this.newValue);
    })
  }
  SubmitVal(val:any){
  this.passValue=val.value;
  // console.log(this.passValue)
  }
  messageReceive($event:any){
    this.receiver = $event;
    console.log('Receive value in parent',this.receiver)
  }
  changeDefaultMessage(){
    this.messageSrv.changeMessage('Change message from parent component');
  }
  destroy(){
    this.compExist=false
  }
}

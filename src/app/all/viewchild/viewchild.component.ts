import { MessageService } from './../../service/message.service';
import { ChildTwoComponent } from './../child2/child2.component';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit,AfterViewInit {

  uName:string='Muhammad Imad Khan';
  newValue:string='';
  @ViewChild('box')
  box!: ElementRef;
  @ViewChild(ChildTwoComponent) child!: ChildTwoComponent;

  constructor(private messageSrv : MessageService) { }

  ngAfterViewInit() {
    // this.box.nativeElement.style.backgroundColor="green"
    // this.box.nativeElement.innerHTML="Change due to viewchild"
    console.log('View Child testing',this.box);
    console.log('this is child component access',this.child)
  }

  ngOnInit(): void {
    this.messageSrv.currentMessage.subscribe((res)=>{
      this.newValue = res;
    })
  }
  changeName(){
    this.child.userName=this.uName;
  }
  callAlert(){
    this.child.clickMe();
  }
}

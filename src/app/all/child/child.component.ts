import { MessageService } from './../../service/message.service';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  //  ""
  public message :string ="";
  newValue: string='';

  @Input() receiveValue!: string;
  @Output() messageEvent = new EventEmitter<string>()

  constructor(private messageSrv:MessageService) {
    console.log('I am constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      'I am ngOnChanges',
      changes.receiveValue.currentValue
    );
  }
  // ngOnchangescalled every time when changes detect in input property
  ngOnInit() {
    this.messageSrv.currentMessage.subscribe((res)=>{
      this.newValue = res;
    })
    console.log('I am ngOnInit');
  }
  // ngDocheck called every time when any changes detect in child component
  ngDoCheck() {
    console.log('I am ngDocheck');
  }
  ngAfterContentInit() {
    console.log('I am ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('I am ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('I am ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('I am ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('I am ngOnDestroy');
  }
  sendMessage(event:any){
    this.message = event.value;
    console.log('Send value from child',this.message);
    this.messageEvent.emit(this.message);
  }
}

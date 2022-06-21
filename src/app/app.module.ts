import { IncludeComponent } from './include/include.component';
import { HeaderComponent } from './include/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
import { ChildComponent } from './all/child/child.component';
import { ChildTwoComponent } from './all/child2/child2.component';
import { EmployeeComponent } from './all/employee/employee.component';
import { ParentComponent } from './all/parent/parent.component';
import { ViewchildComponent } from './all/viewchild/viewchild.component';
import { ListComponent } from './all/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncludeComponent,
    EmployeeComponent,
    ParentComponent,
    ChildComponent,
    ViewchildComponent,
    ChildTwoComponent,
    AllComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

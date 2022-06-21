import { AllComponent } from './all/all.component';
import { HeaderComponent } from './include/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './all/parent/parent.component';
import { ListComponent } from './all/list/list.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'All',component:AllComponent,
  children:[
    // {path:'',redirectTo:'All',pathMatch:'full'},
    {path:'',component:ListComponent,pathMatch:'full'},
    {path:'parent',component:ParentComponent,pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

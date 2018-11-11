import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { BasicComponent } from './basic/basic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { OverwiewComponent } from './department/overwiew/overwiew.component';
import { ContactComponent } from './department/contact/contact.component';
import { BootcampDetailsComponent } from './bootcamp/bootcamp-details/bootcamp-details.component';
import { BootcampListComponent } from './bootcamp/bootcamp-list/bootcamp-list.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { QueryListComponent } from './query-list/query-list.component';
import { SubjectComponent } from './subject/subject.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './Shared/auth-guard.service';


const routes: Routes = [
 {path: '', redirectTo: 'bootcamp', pathMatch: 'full'},
  {path: 'basics', component: BasicComponent},
  {path: 'employee', component: EmployeelistComponent },
  {path: 'department-list', component: DepartmentListComponent},
  {path: 'department-list/:id', component: DepartmentDetailsComponent,
  children: [
    {path: 'overview' , component: OverwiewComponent},
    {path: 'contact', component: ContactComponent}
  ]
  },
  {path: 'bootcamp', component: BootcampListComponent, canActivate: [AuthGuard]},
  {path: 'bootcamp/:id', component: BootcampDetailsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'querylist', component: QueryListComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'rxjs', component: RxjsComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

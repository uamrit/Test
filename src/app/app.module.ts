import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { BasicComponent } from './basic/basic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { OverwiewComponent } from './department/overwiew/overwiew.component';
import { ContactComponent } from './department/contact/contact.component';
import { BootcampDetailsComponent } from './bootcamp/bootcamp-details/bootcamp-details.component';
import { BootcampListComponent } from './bootcamp/bootcamp-list/bootcamp-list.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { SharedComponent } from './shared/shared.component';
import { CustomeAttributeDirective } from './directive/custom-attribute.directive';
import { ViewchildComponent } from './ViewChild/viewchild/viewchild.component';
import { ViewChildMsgComponent } from './ViewChild/view-child-msg/view-child-msg.component';
import { QueryListComponent } from './query-list/query-list.component';
import { SubjectComponent } from './subject/subject.component';
import { ChildAComponent } from './subject/child-a/child-a.component';
import { ChildBComponent } from './subject/child-b/child-b.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ExpontialStrengthPipe } from './basic/expontial-strength.pipe';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeelistComponent,
    EmployeeDetailsComponent,
    DepartmentListComponent,
    BasicComponent,
    PageNotFoundComponent,
    DepartmentDetailsComponent,
    OverwiewComponent,
    ContactComponent,
    BootcampDetailsComponent,
    BootcampListComponent,
    RegistrationComponent,
    SharedComponent,
    CustomeAttributeDirective,
    ViewchildComponent,
    ViewChildMsgComponent,
    QueryListComponent,
    SubjectComponent,
    ChildAComponent,
    ChildBComponent,
    RxjsComponent,
    ExpontialStrengthPipe,
    SignInComponent,
    SignUpComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

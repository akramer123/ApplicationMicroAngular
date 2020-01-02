import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationpeopleComponent} from './applicationpeople.component';
import {HomeComponent} from './home/home.component';
import {PeopleListComponent} from './people-list/people-list.component';
import {PeopleDetailComponent} from './people-detail/people-detail.component';
import {ApplicationpeopleRouting} from "./applicationpeople-routing.module";
import {FilterPipe} from './pipes'
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [ApplicationpeopleComponent, HomeComponent, PeopleListComponent, PeopleDetailComponent, FilterPipe],
  imports: [
    ApplicationpeopleRouting,
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ApplicationpeopleComponent]
})
export class ApplicationpeopleModule {
}

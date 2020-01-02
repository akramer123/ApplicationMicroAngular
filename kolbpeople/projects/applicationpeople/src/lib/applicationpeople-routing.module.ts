import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ApplicationpeopleComponent} from "./applicationpeople.component";
import {PeopleListComponent} from "./people-list/people-list.component";
import {PeopleDetailComponent} from "./people-detail/people-detail.component";

const routes: Routes = [
  {
    path: 'applicationpeople', component: ApplicationpeopleComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {
        path: 'people-list', component: PeopleListComponent, children: [
          {path: 'people-detail', component: PeopleDetailComponent},
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApplicationpeopleRouting {
}

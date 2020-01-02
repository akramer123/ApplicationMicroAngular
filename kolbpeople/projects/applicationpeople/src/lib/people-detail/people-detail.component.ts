import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'appPeople-people-detail',
  templateUrl: './people-detail.component.html',
  styles: []
})
export class PeopleDetailComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    debugger
  }

  ngOnInit() {
    debugger
    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      this.id = params.id;
      console.log(this.id);
    });
  }

}

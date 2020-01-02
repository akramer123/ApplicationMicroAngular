import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'appPeople-people-list',
  templateUrl: './people-list.component.html',
  styles: []
})
export class PeopleListComponent implements OnInit {
  queryString: string;
  searchableList: any;
  list: any;

  constructor(private httpClient: HttpClient) {
    /**
    this.httpClient.get('http://localhost:8080/applicationservice/GetAllPersons', {
      params: {
        say: 'test'
      },
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      console.log(response);
      this.list=response.body['persons']
    })
    .catch((err: HttpErrorResponse) => {
      // simple logging, but you can do a lot more, see below
      debugger
      console.error('An error occurred:', err.error);
    });*/
    this.list = [
      {name: 'Tobi', age: '12', job: 'Software Developer'},
      {name: 'Salman', age: '13', job: 'Software Developer'},
      {name: 'Tobi2', age: '84', job:'Projektleiter'},
    ];
    this.searchableList = ['name', 'age']
  }
/**

  }*/

  ngOnInit() {
  }

}

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  constructor(private http: Http) {}

  getPeople() {
    console.log("GET PEOPLE");
    return this.http.get('person/getPeople')
      .map((res: Response) => res.json());
  }
  search(query) {
    console.log("SEARCH PEOPLE");
    return this.http.get('person/search?searchCriteria='+query)
      .map((res: Response) => res.json());
  }
}


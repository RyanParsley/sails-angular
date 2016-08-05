import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CompaniesService {

  constructor(private http: Http) {}

  getCompanies() {
    console.log("GET Companies");
    return this.http.get('company')
      .map((res: Response) => res.json());
  }
}


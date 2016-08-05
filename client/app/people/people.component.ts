import {
  Component,
  Injectable,
  bind,
  OnInit,
  ElementRef,
  EventEmitter,
  Inject
} from '@angular/core';
import {Control} from '@angular/common';
import { Http, Response, HTTP_PROVIDERS } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { PeopleService } from './people.service';

/**
 * SearchBox displays the search box and emits events based on the results
 */

@Component({
  outputs: ['loading', 'results'],
  selector: 'search-box',
  template: `
    <div>
      <h2>People Search</h2>
      <input type="text" [ngFormControl]="term"/>
      <ul>
        <li *ngFor="let person of people | async">{{person.name}}</li>
      </ul>
    </div>
  `,
  providers: [PeopleService, HTTP_PROVIDERS]
})
class SearchBox {
  term = new Control();
  people: Observable<Array<string>>;

  constructor(private peopleService: PeopleService){

  this.people = this.term.valueChanges
               .debounceTime(400)
               .distinctUntilChanged()
               .switchMap(term => this.peopleService.search(term))
               .map(res => res.options.updatedPeople);
  }
}

@Component({
  moduleId: module.id,
  selector: 'angular2test-app',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  directives: [SearchBox],
  providers: [PeopleService]
})
export class PeopleComponent {
  title = 'People component is working!';
  people = [];

  constructor(private peopleService: PeopleService){}

  ngOnInit() {
    this.peopleService.getPeople()
      .subscribe(people => this.people = people.people);
  }
}

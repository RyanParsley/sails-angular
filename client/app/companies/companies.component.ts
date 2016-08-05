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
import { CompaniesService } from './companies.service';

/**
 * SearchBox displays the search box and emits events based on the results
 */

@Component({
  moduleId: module.id,
  selector: 'company-list',
  templateUrl: 'companies.component.html',
  styleUrls: ['companies.component.css'],
  providers: [CompaniesService]
})
export class CompaniesComponent {
  title = 'Companies component is working!';
  companies = [];

  constructor(private companiesService: CompaniesService){}

  ngOnInit() {
    this.companiesService.getCompanies()
      .subscribe(companies => this.companies = companies.options.companies);
  }
}

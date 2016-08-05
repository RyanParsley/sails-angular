import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { PeopleComponent, CompaniesComponent, environment } from './app';

if (environment.production) {
  enableProdMode();
}

bootstrap(PeopleComponent, [Http, HTTP_PROVIDERS]);
bootstrap(CompaniesComponent, [Http, HTTP_PROVIDERS]);

import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CompaniesComponent } from './companies.component';

beforeEachProviders(() => [CompaniesComponent]);

describe('App: CompanyList', () => {
  it('should create the app',
      inject([CompaniesComponent], (app: CompaniesComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2test works!\'',
      inject([CompaniesComponent], (app: CompaniesComponent) => {
    expect(app.title).toEqual('angular2test works!');
  }));
});

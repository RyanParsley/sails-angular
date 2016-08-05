import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PeopleComponent } from './people.component';

beforeEachProviders(() => [PeopleComponent]);

describe('App: Angular2test', () => {
  it('should create the app',
      inject([PeopleComponent], (app: PeopleComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2test works!\'',
      inject([PeopleComponent], (app: PeopleComponent) => {
    expect(app.title).toEqual('angular2test works!');
  }));
});

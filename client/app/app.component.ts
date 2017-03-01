import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: require('./app.component.pug'),
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}

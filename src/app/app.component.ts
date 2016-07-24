import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}

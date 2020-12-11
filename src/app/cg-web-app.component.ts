import { Component } from '@angular/core';

@Component({
  selector: 'cg-web-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class CgWebAppComponent {
  title = 'cg-web';
}

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <div>
    <div class="banner">
      <h1>{{title}}</h1>
    </div>
    <div class="main">
      <nav>
        <a class="sliding-middle-out" routerLink="/dashboard" routerLinkActive="active">DASHBOARD</a>
        <a routerLink="/heroes" routerLinkActive="active">HEROES</a>
      </nav>
    </div>
    <div class="footer">
      
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'DC Legends Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
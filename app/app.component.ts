import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <nav>
      <div class="title"><span>{{title}}</span></div>
      <a routerLink="/dashboard" routerLinkActive="active">DASHBOARD</a>
      <a routerLink="/heroes" routerLinkActive="active">HEROES</a>
    </nav>
    <router-outlet ></router-outlet>
  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'DC LEGENDS HEROES';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
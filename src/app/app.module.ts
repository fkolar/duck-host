import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation'

const routes: Route[] = [
  {
    path: 'game',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3003/remoteEntry.js',
        remoteName: 'duckhunt',
        exposedModule: './Module'
      }).then((m) => m.DuckHuntModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

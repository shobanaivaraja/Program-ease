import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AdtPage} from '../pages/adt/adt';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListsPage } from '../pages/lists/lists';
import { StackPage } from '../pages/stack/stack';
import { StackprogramPage } from '../pages/stackprogram/stackprogram';
import { StackAppPage } from '../pages/stack-app/stack-app';
import  {ProgramPage} from '../pages/program/program';
import {TypelistPage} from '../pages/typelist/typelist';
import {FrontPage} from '../pages/front/front';

import {Python2Page} from '../pages/python2/python2';
import {Python1Page} from '../pages/python1/python1';
import {PythonPage} from '../pages/python/python';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PythonPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Data Structure', component: HomePage },
      { title: 'Stack', component: ListPage },
      {title:'List', component:ListsPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {PythonPage} from '../pages/python/python';
import {Python1Page} from '../pages/python1/python1';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StackPage } from '../pages/stack/stack';
import { StackprogramPage } from '../pages/stackprogram/stackprogram';
import { StackAppPage } from '../pages/stack-app/stack-app';
import { ListsPage } from '../pages/lists/lists';

import {Python2Page} from '../pages/python2/python2';
import { HttpModule } from '@angular/http'
import 'rxjs/add/operator/map';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AdtPage} from '../pages/adt/adt';

import {ProgramPage} from '../pages/program/program';
import {FrontPage} from '../pages/front/front';
import {TypelistPage} from '../pages/typelist/typelist';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StackPage,
    StackprogramPage,
    StackAppPage,
    ListsPage,
    AdtPage,
    PythonPage,
    ProgramPage,
    TypelistPage,
    FrontPage,
    Python1Page,
    Python2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StackPage,
    StackprogramPage,
    StackAppPage,
    ListsPage,
    AdtPage,
    ProgramPage,
    TypelistPage,
    FrontPage,
    PythonPage,
    Python1Page,
    Python2Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

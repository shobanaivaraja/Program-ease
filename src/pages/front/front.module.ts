import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrontPage } from './front';
import {PythonPage} from '../python/python';
import {HomePage} from '../home/home';
@NgModule({
  declarations: [
    FrontPage,HomePage,PythonPage
  ],
  imports: [
    IonicPageModule.forChild(FrontPage),
  ],
})
export class FrontPageModule {}

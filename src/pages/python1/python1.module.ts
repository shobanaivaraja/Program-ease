import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Python1Page } from './python1';
import {Python2Page} from '../python2/python2';
@NgModule({
  declarations: [
    Python1Page,
    Python2Page
  ],
  imports: [
    IonicPageModule.forChild(Python1Page),
  ],
})
export class Python1PageModule {}

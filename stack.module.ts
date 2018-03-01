import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StackPage } from './stack';
import { StackprogramPage } from '../stackprogram/stackprogram';

@NgModule({
  declarations: [
    StackPage,StackprogramPage
  ],
  imports: [
    IonicPageModule.forChild(StackPage),
  ],
})
export class StackPageModule {}

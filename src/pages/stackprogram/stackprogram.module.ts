import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StackprogramPage } from './stackprogram';
import { StackAppPage } from '../stack-app/stack-app';


@NgModule({
  declarations: [
    StackprogramPage,
    StackAppPage
  ],
  imports: [
    IonicPageModule.forChild(StackprogramPage),
  ],
})
export class StackprogramPageModule {}

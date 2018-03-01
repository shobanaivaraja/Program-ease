import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StackAppPage } from './stack-app';
import { ListsPage } from '../lists/lists';

@NgModule({
  declarations: [
    StackAppPage,
    ListsPage
  ],
  imports: [
    IonicPageModule.forChild(StackAppPage),
  ],
})
export class StackAppPageModule {}

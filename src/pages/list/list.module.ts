import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';

import { StackPage} from '../stack/stack';
@NgModule({
  declarations: [
    ListPage,
    StackPage
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
})
export class ListPageModule {}

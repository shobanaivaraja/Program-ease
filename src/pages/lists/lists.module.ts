import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListsPage } from './lists';
import {AdtPage} from '../adt/adt';
import {HomePage} from '../home/home';

@NgModule({
  declarations: [
    ListsPage,
    AdtPage,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(ListsPage),
  ],
})
export class ListsPageModule {}

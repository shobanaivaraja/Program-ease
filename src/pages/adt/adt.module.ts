import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdtPage } from './adt';
import {TypelistPage} from '../typelist/typelist';
@NgModule({
  declarations: [
    AdtPage,
    TypelistPage
  ],
  imports: [
    IonicPageModule.forChild(AdtPage),
  ],
})
export class AdtPageModule {}

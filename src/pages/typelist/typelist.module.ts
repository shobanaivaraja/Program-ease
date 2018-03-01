import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TypelistPage } from './typelist';
import {ProgramPage} from '../program/program';
@NgModule({
  declarations: [
    TypelistPage,
    ProgramPage,
  ],
  imports: [
    IonicPageModule.forChild(TypelistPage),
  ],
})
export class TypelistPageModule {}

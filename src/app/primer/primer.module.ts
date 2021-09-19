import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimerPageRoutingModule } from './primer-routing.module';

import { PrimerPage } from './primer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimerPageRoutingModule
  ],
  declarations: [PrimerPage]
})
export class PrimerPageModule {}

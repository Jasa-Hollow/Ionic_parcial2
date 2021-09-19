import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimerPage } from './primer.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimerPageRoutingModule {}

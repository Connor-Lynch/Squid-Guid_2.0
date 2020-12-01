import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuidSelectorComponent } from './guid-selector/guid-selector.component';

const routes: Routes = [{
  path: '',
  component: GuidSelectorComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
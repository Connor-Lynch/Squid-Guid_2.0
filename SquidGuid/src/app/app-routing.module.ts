import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuidSelectorComponent } from './guid-selector/guid-selector.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./guid-selector/guid-selector.module').then(m => m.GuidSelectorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

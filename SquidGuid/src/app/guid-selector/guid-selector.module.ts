import { GuidSelectorComponent } from './guid-selector.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
    {
        path: '',
        component: GuidSelectorComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule
    ],
    declarations: [
      GuidSelectorComponent
    ],
    exports: [
      GuidSelectorComponent
    ]
})
export class GuidSelectorModule {}

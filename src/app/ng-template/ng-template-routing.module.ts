import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgTemplateComponent} from './ng-template.component';


const routes: Routes = [
    {
        path: '',
        component: NgTemplateComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class NgTemplateRoutingModule { }

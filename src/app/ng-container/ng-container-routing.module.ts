import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgContainerComponent} from './ng-container.component';

const routes: Routes = [
    {
        path: '',
        component: NgContainerComponent
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
export class NgContainerRoutingModule { }

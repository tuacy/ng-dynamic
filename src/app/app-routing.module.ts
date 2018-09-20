import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgContentModule} from './ng-content/ng-content.module';
import {NgTemplateModule} from './ng-template/ng-template.module';
import {NgContainerModule} from './ng-container/ng-container.module';


const appRoutes: Routes = [
    {
        path: 'ng-content',
        loadChildren: () => NgContentModule
    }, {
        path: 'ng-template',
        loadChildren: () => NgTemplateModule
    }, {
        path: 'ng-container',
        loadChildren: () => NgContainerModule
    }, {
        path: '',
        redirectTo: '/ng-content',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}

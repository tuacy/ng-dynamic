import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgContentComponent} from './ng-content.component';
import {NgContentRoutingModule} from './ng-content-routing.module';

@NgModule({
    declarations: [
        NgContentComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgContentRoutingModule
    ]
})
export class NgContentModule {
}

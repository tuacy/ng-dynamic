import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgContainerRoutingModule} from './ng-container-routing.module';
import {NgContainerComponent} from './ng-container.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        NgContainerComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgContainerRoutingModule
    ]
})
export class NgContainerModule {
}

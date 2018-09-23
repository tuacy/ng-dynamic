import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgTemplateComponent} from './ng-template.component';
import {NgTemplateRoutingModule} from './ng-template-routing.module';
import { TemplateInputComponent } from './template-input/template-input.component';

@NgModule({
    declarations: [
        NgTemplateComponent,
        TemplateInputComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgTemplateRoutingModule
    ]
})
export class NgTemplateModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgTemplateModule} from './ng-template/ng-template.module';
import {NgContentModule} from './ng-content/ng-content.module';
import {NgContainerModule} from './ng-container/ng-container.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        NgContainerModule,
        NgContentModule,
        NgTemplateModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

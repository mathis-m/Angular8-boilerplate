import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {NavModule} from './nav/nav.module';
import {HomeComponent, SampleComponent} from './views';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SampleComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        NavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './comps/c1/c1.component';
import { AppHigclightDirective } from './d/app-higclight.directive';
import { ResultsComponent } from './comps/results/results.component';
import { ShowcaseDirective } from './d/showcase.directive';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    AppHigclightDirective,
    ResultsComponent,
    ShowcaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

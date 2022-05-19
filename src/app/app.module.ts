import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import { GantComponent } from './gant/gant.component';

@NgModule({
  declarations: [
    AppComponent,
    GantComponent
  ],
    imports: [
        BrowserModule,
        TableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxTributeModule} from 'ngx-tribute';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContenteditableModule } from '@ng-stack/contenteditable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      NgxTributeModule,
      ContenteditableModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

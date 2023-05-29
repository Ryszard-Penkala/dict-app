import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { DictComponent } from './pages/dict/dict.component';
import { DictRowComponent } from './pages/dict-row/dict-row.component';
import { DictManagerComponent } from './pages/dict-manager/dict-manager.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DictEditComponent } from './components/dict-edit/dict-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DictComponent,
    DictRowComponent,
    DictManagerComponent,
    PageNotFoundComponent,
    DictEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

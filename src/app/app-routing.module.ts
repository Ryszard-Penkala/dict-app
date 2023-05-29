import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DictComponent} from "./pages/dict/dict.component";
import {DictRowComponent} from "./pages/dict-row/dict-row.component";
import {DictManagerComponent} from "./pages/dict-manager/dict-manager.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'api/dict-manager/v1', pathMatch: "full"},
  { path: 'api/dict-manager/v1', component: DictManagerComponent},
  { path: 'api/dict-manager/v1/dicts', component: DictComponent },
  { path: 'api/dict-manager/v1/dict-rows', component: DictRowComponent },
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'not-found'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

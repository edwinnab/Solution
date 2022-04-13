import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookViewOneComponent} from "./book-view-one/book-view-one.component";
import {BookViewTwoComponent} from "./book-view-two/book-view-two.component";
import {NavigationComponent} from "./navigation/navigation.component";

const routes: Routes = [
  {
    path: '',
    component:BookViewOneComponent
  },
  {
    path: 'tokenValue',
    component: BookViewTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

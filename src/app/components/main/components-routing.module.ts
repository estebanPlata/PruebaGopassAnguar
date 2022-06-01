import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MyNewsComponent } from '../my-news/my-news.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'myNews', component: MyNewsComponent },
  {path: '**',pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

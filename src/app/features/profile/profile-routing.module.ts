import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '', component: AboutComponent
  },
  {
    path: 'edit', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

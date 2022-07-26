import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubBoardComponent } from './pages/board/board.component';
import { PublicBoardsComponent } from './pages/public-boards/public-boards.component';

const routes: Routes = [
  {
    path: '',
    component: PublicBoardsComponent,
  },
  {
    path: ':boardName/:id', component: PubBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicBoardsRoutingModule {}

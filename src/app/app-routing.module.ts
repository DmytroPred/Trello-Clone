import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authorization', loadChildren: () => import('./features/authorization/authorization.module').then(m => m.AuthorizationModule)},
  { path: 'boards', loadChildren: () => import('./features/board/boards.module').then(m => m.BoardsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

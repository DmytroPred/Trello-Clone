import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'authorization', loadChildren: () => import('./features/authorization/authorization.module').then(m => m.AuthorizationModule)},
  { path: 'public-boards', loadChildren: () => import('./features/public-boards/public-boards.module').then(m => m.PublicBoardsModule)},
  { path: 'private-boards', loadChildren: () => import('./features/private-boards/boards.module').then(m => m.BoardsModule)},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

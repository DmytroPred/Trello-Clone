import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './features/main/main.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthCanActivateGuard } from './shared/_guards/auth.can-activate.guard';
import { UnauthCanActivateGuard } from './shared/_guards/unauth.can-activate.guard';

const routes: Routes = [
    { path: '', component: MainComponent },
    {
        path: 'authorization',
        loadChildren: () => import('./features/authorization/authorization.module').then((m) => m.AuthorizationModule),
        canActivate: [UnauthCanActivateGuard]
    },
    {
        path: 'public-boards',
        loadChildren: () => import('./features/public-boards/public-boards.module').then((m) => m.PublicBoardsModule),
    },
    {
        path: 'private-boards',
        loadChildren: () => import('./features/private-boards/boards.module').then((m) => m.BoardsModule),
        canActivate: [AuthCanActivateGuard]
    },
    {
        path: 'profile',
        loadChildren: () => import('./features/profile/profile.module').then((m) => m.ProfileModule),
        canActivate: [AuthCanActivateGuard]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

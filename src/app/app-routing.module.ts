import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArtViewComponent } from './art-view/art-view.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: 'signup',
                component: SignupComponent
            }
        ]
    },
    { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
    { path: 'art-view', canActivate: [AuthGuard], component: ArtViewComponent },
    { path: 'inventory', canActivate: [AuthGuard], component: InventoryComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

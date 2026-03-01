import { Routes } from '@angular/router';

export const REMOTE_ROUTES: Routes = [

    {
        path: '',
        loadComponent: () => import('./app.component').then(m => m.AppComponent)
    }
];

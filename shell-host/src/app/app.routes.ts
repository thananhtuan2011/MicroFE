import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: 'mfe1',
    //     loadComponent: () =>
    //         loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
    // },
    {
        path: 'mfe1',
        loadChildren: () =>
            loadRemoteModule('mfe1', './routes').then((m) => m.REMOTE_ROUTES),
    },
];

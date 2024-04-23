import { Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';

export const routes: Routes = [

    {
        path: '', 
        redirectTo: '/main', 
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    }
];

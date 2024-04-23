import { Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { GameComponent } from './views/game/game.component';

export const routes: Routes = [

    {
        path: '', 
        redirectTo: '/main', 
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path:'game',
        component: GameComponent
    }

];

import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Public } from './pages/public/public';

export const routes: Routes = [
    {path:'', component:Public},   
    {path:'dashboard', component:Dashboard},   
    {path:'**', redirectTo:'dashboard'},
];

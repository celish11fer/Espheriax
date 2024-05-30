import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './pages/master/master.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'master', component:MasterComponent, title:'home'
    },
    {
        path:'register',component:RegisterComponent
    },
];

import { Routes } from '@angular/router';
import { App } from './app';
import { Counter } from './counter/counter';
import { Databinding } from './databinding/databinding';
import { Ex3, Ex4 } from './FewComponents';
import { MathComponent } from './math-component/math-component';

export const routes: Routes = [
    {path:"" , component:App},
    {path:"counter", component:Counter},
    {path:"databinding", component:Databinding},
    {path:"ifex", component:Ex3},
    {path:"forex", component:Ex4},
    {path:"serviceex", component:MathComponent},
];

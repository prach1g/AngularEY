import { Routes } from '@angular/router';
import { App } from './app';
import { Counter } from './counter/counter';
import { Databinding } from './databinding/databinding';
import { Ex3, Ex4, LifecycleComponent, PipeEx, UserProfileComponent } from './FewComponents';
import { MathComponent } from './math-component/math-component';
import { Ajaxexample } from './ajaxexample/ajaxexample';

export const routes: Routes = [
    {path:"" , component:App},
    {path:"counter", component:Counter},
    {path:"databinding", component:Databinding},
    {path:"ifex", component:Ex3},
    {path:"forex", component:Ex4},
    {path:"serviceex", component:MathComponent},
    {path:"ajaxex", component:Ajaxexample},
    {path:"lifeex", component:LifecycleComponent},
    {path:"pipex", component:PipeEx},
    {path:"uf", component:UserProfileComponent},
];

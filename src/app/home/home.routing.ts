import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { SleepComponent } from './sleep/sleep.component';
import { ReadingComponent } from './reading/reading.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
        children: [
            {path: 'sleep', component: SleepComponent},
            {path: 'reading', component: ReadingComponent},
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule{
    constructor(){}
}
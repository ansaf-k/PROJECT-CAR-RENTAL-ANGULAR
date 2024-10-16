import { Routes } from '@angular/router';
import { CarlistComponent } from './Component/carlist/carlist.component';
import { BookingsComponent } from './Component/bookings/bookings.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'booking',
        pathMatch:'full'
    },
    {
        path:'car',
        component:CarlistComponent
    },
    {
        path:'booking',
        component: BookingsComponent
    }
];

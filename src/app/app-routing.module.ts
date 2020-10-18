import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';


const routes: Routes = 
/*[
  { path: 'donuts', component: DonutsComponent, 
    children: [{ path: 'donutdetail', component: DonutDetailComponent }]},
  { path: 'famouspeople', component: FamousPeopleComponent,
    children: [{ path: 'famouspersondetail', component: FamousPersonDetailComponent }]},
];*/

[
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'donuts', component: DonutsComponent },
  { path: 'donutdetail/:id', component: DonutDetailComponent },
  { path: 'famouspeople', component: FamousPeopleComponent },
  { path: 'famouspersondetail', component: FamousPersonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

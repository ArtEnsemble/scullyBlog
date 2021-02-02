import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LatestComponent } from './latest/latest.component';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
  { path: 'about', component: AboutComponent },
  { path: 'latest', component: LatestComponent },
  { path: '', redirectTo: '/latest', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './modules/blog/view/view.component';
import { PageNotFoundComponent } from './modules/lib/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './modules/lib/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'blog',
    component: ViewComponent,
  },
  {
    path: 'blog/:id',
    component: ViewComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [HomeComponent, CardComponent, HeaderComponent, ViewComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class BlogModule { }

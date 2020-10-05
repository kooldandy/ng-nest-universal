import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { ViewComponent } from './view/view.component';
import { SharedMaterialModule } from '../shared/sharedMaterial.module';


@NgModule({
  declarations: [HomeComponent, CardComponent, HeaderComponent, ViewComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedMaterialModule
  ]
})
export class BlogModule { }

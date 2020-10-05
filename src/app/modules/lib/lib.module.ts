import { SharedMaterialModule } from './../shared/sharedMaterial.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [LoginComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    LoginComponent,
    PageNotFoundComponent
  ],
  entryComponents: [
    LoginComponent,
    PageNotFoundComponent
  ]
})
export class LibModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { navbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [BaseComponent, navbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class LayoutModule { }

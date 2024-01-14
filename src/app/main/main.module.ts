import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [],
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  providers: [],
})
export class MainModule {}

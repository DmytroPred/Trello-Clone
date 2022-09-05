import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';

@NgModule({
  declarations: [MainComponent, FooterComponent],
  imports: [
    CommonModule,
    CarouselModule,
  ]
})
export class MainPageModule { }

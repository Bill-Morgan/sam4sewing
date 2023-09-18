import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotosModule } from './photos/photos.module';
import { MemorialBearsModule } from './memorial-bears/memorial-bears.module';
import { ContactModule } from './contact/contact.module';
import { FacebookModule } from './facebook/facebook.module';
import { ServicesModule } from './services/services.module';
import { HomeModule } from './home/home.module';
import { PromotionsModule } from './promotions/promotions.module';
import { HeaderModule } from './header/header.module';
import { BannerScrollDirective } from './banner-scroll.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BannerScrollDirective,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    MemorialBearsModule,
    ContactModule,
    ServicesModule,
    HomeModule,
    PromotionsModule,
    FacebookModule,
    HeaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

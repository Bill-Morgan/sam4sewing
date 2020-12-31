import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MemorialBearsComponent } from './memorial-bears/memorial-bears.component';
import { PhotosComponent } from './photos/photos.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ServicesComponent } from './services/services.component'

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'memorialbears', component: MemorialBearsComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'memorialbears', component: MemorialBearsComponent},
  { path: 'promotions', component: PromotionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
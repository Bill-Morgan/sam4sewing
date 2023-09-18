import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)},
  { path: 'memorialbears', loadChildren: () => import('./memorial-bears/memorial-bears.module').then(m => m.MemorialBearsModule)},
  { path: 'photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)},
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  { path: 'promotions', loadChildren: () => import('./promotions/promotions.module').then(m => m.PromotionsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
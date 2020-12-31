import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemorialBearsComponent } from './memorial-bears/memorial-bears.component';
import { ServicesComponent } from './services/services.component'

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'memorialbears', component: MemorialBearsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { BannerScrollDirective } from "../banner-scroll.directive";
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "./header.component";

@NgModule({
    declarations: [
        HeaderComponent,
        NavbarComponent],
    imports: [
        CommonModule,
        AppRoutingModule],
    exports: [HeaderComponent]
})
export class HeaderModule {}
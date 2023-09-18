import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FacebookModule } from "../facebook/facebook.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule,
            FacebookModule,
            RouterModule.forChild([{path: '', component: HomeComponent}])]
})
export class HomeModule {}
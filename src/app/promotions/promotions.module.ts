import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PromotionsComponent } from "./promotions.component";


@NgModule({
    declarations: [PromotionsComponent],
    imports: [CommonModule,
            RouterModule.forChild([{path: '', component: PromotionsComponent}])]
})
export class PromotionsModule {}
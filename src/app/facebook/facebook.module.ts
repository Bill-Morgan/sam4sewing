import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FacebookComponent } from "./facebook.component";


@NgModule({
    declarations: [FacebookComponent],
    imports: [CommonModule],
    exports: [FacebookComponent]
})
export class FacebookModule {}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SlideShowComponent } from "./slide-show.component";

@NgModule({
    declarations: [SlideShowComponent],
    imports:[CommonModule],
    exports:[SlideShowComponent]
})
export class SlideShowModule{}
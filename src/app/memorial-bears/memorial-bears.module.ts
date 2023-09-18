import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SlideShowModule } from "../slide-show/slide-show.module";
import { MemorialBearsComponent } from "./memorial-bears.component";


@NgModule({
    declarations: [MemorialBearsComponent],
    imports: [CommonModule,
    SlideShowModule,
    RouterModule.forChild([{path: '', component: MemorialBearsComponent}])
    ]
})
export class MemorialBearsModule{}
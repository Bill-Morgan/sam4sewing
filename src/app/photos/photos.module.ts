import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SlideShowModule } from "../slide-show/slide-show.module";
import { PhotosComponent } from "./photos.component";


@NgModule({
    declarations: [PhotosComponent],
    imports: [CommonModule,
    SlideShowModule,
    RouterModule.forChild([{path: '', component: PhotosComponent}])]
})
export class PhotosModule {
}
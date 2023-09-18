import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FacebookModule } from "../facebook/facebook.module";
import { ContactComponent } from "./contact.component";

@NgModule({
    declarations: [ContactComponent],
    imports: [CommonModule,
            FacebookModule,
            RouterModule.forChild([{path: '', component: ContactComponent}])]
})
export class ContactModule {}
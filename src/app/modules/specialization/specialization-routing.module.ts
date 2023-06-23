import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { specializationURLs } from "./configs/url";
import { SpecializationCreateComponent } from "./pages/specialization-create/specialization-create.component";
import { SpecializationListComponent } from "./pages/specialization-list/specialization-list.component";

const routes: Routes = [
    { path: specializationURLs.list, component: SpecializationListComponent },
    { path: specializationURLs.create, component: SpecializationCreateComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SpecializationRoutingModule { }

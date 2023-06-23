import { NgModule } from "@angular/core";
import { doctorURLs } from "./configs/url";
import { DoctorCreateComponent } from "./pages/doctor-create/doctor-create.component";
import { DoctorListComponent } from "./pages/doctor-list/doctor-list.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: doctorURLs.list, component: DoctorListComponent },
    { path: doctorURLs.create, component: DoctorCreateComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DoctorRoutingModule { }

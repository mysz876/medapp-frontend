import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { branchURLs } from "./configs/url";
import { BranchListComponent } from "./pages/branch-list/branch-list.component";
import { BranchCreateComponent } from "./pages/branch-create/branch-create.component";

const routes: Routes = [
    { path: branchURLs.list, component: BranchListComponent },
    { path: branchURLs.create, component: BranchCreateComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BranchRoutingModule { }

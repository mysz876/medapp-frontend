import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchRoutingModule } from './modules/branch/branch-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BranchRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

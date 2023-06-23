import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchRoutingModule } from './modules/branch/branch-routing.module';
import { SpecializationRoutingModule } from './modules/specialization/specialization-routing.module';
import { DoctorRoutingModule } from './modules/doctor/doctor-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BranchRoutingModule,
    SpecializationRoutingModule,
    DoctorRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

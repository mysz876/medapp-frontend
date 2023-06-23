import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './pages/doctor-list/doctor-list.component';
import { DoctorCreateComponent } from './pages/doctor-create/doctor-create.component';
import { DoctorEditComponent } from './pages/doctor-edit/doctor-edit.component';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorCreateComponent,
    DoctorEditComponent,
    DoctorFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class DoctorModule { }

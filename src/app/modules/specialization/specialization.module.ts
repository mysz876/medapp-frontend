import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecializationListComponent } from './pages/specialization-list/specialization-list.component';
import { SpecializationCreateComponent } from './pages/specialization-create/specialization-create.component';
import { SpecializationEditComponent } from './pages/specialization-edit/specialization-edit.component';
import { SpecializationFormComponent } from './components/specialization-form/specialization-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SpecializationListComponent,
    SpecializationCreateComponent,
    SpecializationEditComponent,
    SpecializationFormComponent
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
export class SpecializationModule { }

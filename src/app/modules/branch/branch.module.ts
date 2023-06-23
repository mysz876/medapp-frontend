import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchListComponent } from './pages/branch-list/branch-list.component';
import { SharedModule } from '../shared/shared.module';
import { BranchCreateComponent } from './pages/branch-create/branch-create.component';
import { BranchFormComponent } from './components/branch-form/branch-form.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { BranchEditComponent } from './pages/branch-edit/branch-edit.component';


@NgModule({
  declarations: [
    BranchListComponent,
    BranchCreateComponent,
    BranchFormComponent,
    BranchEditComponent
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
export class BranchModule { }

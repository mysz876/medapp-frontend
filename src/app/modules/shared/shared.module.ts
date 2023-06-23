import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalBodyDirective } from './directives/modal-body.directive';
import { PickerComponent } from './components/picker/picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableComponent,
    SnackbarComponent,
    ModalComponent,
    ModalBodyDirective,
    PickerComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TableComponent,
    PickerComponent,
  ]
})
export class SharedModule { }

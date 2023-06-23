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


@NgModule({
  declarations: [
    TableComponent,
    SnackbarComponent,
    ModalComponent,
    ModalBodyDirective,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    TableComponent,
  ]
})
export class SharedModule { }

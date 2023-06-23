import { Component, OnInit, Inject, ChangeDetectorRef, ComponentRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModal } from '../../models/model.interface';
import { ModalBodyDirective } from '../../directives/modal-body.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: IModal,
    private cdr: ChangeDetectorRef,
  ) { }

  @ViewChild(ModalBodyDirective, { static: true }) modalBody!: ModalBodyDirective
  componentRef!: ComponentRef<any>

  ngOnInit(): void {
    this.modalData.component ? this.loadBody() : null
  }

  loadBody(): void {
    const viewContainerRef = this.modalBody.viewContainerRef
    this.componentRef = viewContainerRef.createComponent(this.modalData.component!)
    this.componentRef.instance.data = this.modalData.extraData
    this.cdr.detectChanges()
  }

  actionFn(): void {
    const dialogResult = this.form ? this.formValue : true
    this.closeModal(dialogResult)
  }

  closeModal(result?: any): void {
    this.dialogRef.close(result)
  }

  get formValue(): any {
    try { return this.form!.getRawValue() }
    catch { return this.form!.value }
  }

  get btnStatus(): boolean {
    return this.form ? this.form.invalid : false
  }

  get form(): FormGroup | undefined {
    return this.componentRef ? this.componentRef.instance.form : undefined
  }

}

import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ISpecialization } from '../../models/specialization.interface';

@Component({
  selector: 'app-specialization-edit',
  templateUrl: './specialization-edit.component.html',
  styleUrls: ['./specialization-edit.component.scss']
})
export class SpecializationEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  @Input() data!: ISpecialization
  @Output() form!: FormGroup

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: new FormControl(this.data.name, [Validators.required])
    })
  }

}

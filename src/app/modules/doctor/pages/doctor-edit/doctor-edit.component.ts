import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDoctor } from '../../models/doctor.interface';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss']
})
export class DoctorEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  @Input() data!: IDoctor
  @Output() form!: FormGroup

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: new FormControl(this.data.name, [Validators.required]),
      surname: new FormControl(this.data.surname, [Validators.required]),
      dayCount: new FormControl(this.data.dayCount, [Validators.required]),
    })
  }
}

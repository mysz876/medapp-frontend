import { Component, Input, OnInit, Output } from '@angular/core';
import { IBranch } from '../../models/branch.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-branch-edit',
  templateUrl: './branch-edit.component.html',
  styleUrls: ['./branch-edit.component.scss']
})
export class BranchEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  @Input() data!: IBranch
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

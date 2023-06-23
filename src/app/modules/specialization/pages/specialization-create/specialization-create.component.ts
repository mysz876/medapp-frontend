import { Component, OnInit } from '@angular/core';
import { SpecializationService } from '../../services/specialization.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { Router } from '@angular/router';
import { specializationURLs } from '../../configs/url';

@Component({
  selector: 'app-specialization-create',
  templateUrl: './specialization-create.component.html',
  styleUrls: ['./specialization-create.component.scss']
})
export class SpecializationCreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private specService: SpecializationService,
    private snackbarService: SnackbarService,
    private router: Router,
  ) { }
  
  form!: FormGroup

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: new FormControl(null, [Validators.required])
    })
  }

  newSpecialization(value: any): void {
    this.specService.createSpecialization(value).subscribe(resp => {
      if(resp.result) { this.router.navigate([specializationURLs.list]) }
      this.snackbarService.open(resp.msg)
    })
  }
}

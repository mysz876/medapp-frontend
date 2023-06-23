import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { doctorURLs } from '../../configs/url';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.scss']
})
export class DoctorCreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private snackService: SnackbarService,
    private router: Router,
  ) { }

  form: FormGroup = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    branch: new FormControl(null, [Validators.required]),
    specialization: new FormControl(null, [Validators.required]),
    dayCount: new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
  }

  newDoctor(value: any): void {
    this.doctorService.create(value).subscribe(resp => {
      if(resp.result) { this.router.navigate([doctorURLs.list]) }
      this.snackService.open(resp.msg)
    })
  }
}

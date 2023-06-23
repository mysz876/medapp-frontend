import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BranchService } from '../../services/branch.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { Router } from '@angular/router';
import { branchURLs } from '../../configs/url';

@Component({
  selector: 'app-branch-create',
  templateUrl: './branch-create.component.html',
  styleUrls: ['./branch-create.component.scss']
})
export class BranchCreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private branchService: BranchService,
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

  newBranch(value: any): void {
    this.branchService.createBranch(value).subscribe(resp => {
      if(resp.result) { this.router.navigate([branchURLs.list]) }
      this.snackbarService.open(resp.msg)
    })
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BranchService } from 'src/app/modules/branch/services/branch.service';
import { IPickerConfig } from 'src/app/modules/shared/models/picker.interface';
import { SpecializationService } from 'src/app/modules/specialization/services/specialization.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {

  constructor(
    private branchService: BranchService,
    private specializationService: SpecializationService,
  ) { }

  @Input() form!: FormGroup
  branchCfg!: IPickerConfig
  specializationCfg!: IPickerConfig

  ngOnInit(): void {
    this.setBranchCfg()
    this.setSpecializationCfg()
  }

  private setBranchCfg(): void {
    const control = this.getControl('branch')
    if(!control) { return }
    this.branchCfg = {
      label: 'Oddział',
      itemDef: 'name',
      data: this.branchService.getBranches(),
      control: control
    }
  }

  private setSpecializationCfg(): void {
    const control = this.getControl('specialization')
    if(!control) { return }
    this.specializationCfg = {
      label: 'Specjalizacja',
      itemDef: 'name',
      data: this.specializationService.getSpecializations(),
      control: control
    }
  }

  private getControl(name: string): FormControl {
    return this.form.get(name) as FormControl
  }
}

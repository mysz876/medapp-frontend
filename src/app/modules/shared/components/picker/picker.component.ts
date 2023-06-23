import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPickerConfig } from '../../models/picker.interface';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {

  constructor() { }

  @Input() config!: IPickerConfig
  @Output() pickEvent: EventEmitter<any> = new EventEmitter()
  
  ngOnInit(): void {
  }

}

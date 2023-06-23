import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITableConfig } from '../../models/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() dataSource$!: any[]
  @Input() tableConfig!: ITableConfig[]

  @Output() editEvent: EventEmitter<any> = new EventEmitter()
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  
  displayedColumns: string[] = []

  ngOnInit(): void {
    this.setColumns()
  }

  setColumns(): void {
    this.tableConfig.forEach(config => {
      this.displayedColumns.push(config.columnDef)
    })
  }
}

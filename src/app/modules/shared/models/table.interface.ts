import { ETableConfigTypes, ETableOptionTypes } from "./table.enum"

export interface ITableConfig {
    columnDef: string
    columnName: string
    type: ETableConfigTypes
    optionList?: ITableOption[]
}

export interface ITableOption {
    name: ETableOptionTypes
    iconName?: string
}

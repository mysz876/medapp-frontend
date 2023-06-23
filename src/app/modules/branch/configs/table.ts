import { ETableConfigTypes, ETableOptionTypes } from "../../shared/models/table.enum";
import { ITableConfig } from "../../shared/models/table.interface";

export const branchTable: ITableConfig[] = [
    {
        columnDef: 'name',
        columnName: 'Nazwa oddziału',
        type: ETableConfigTypes.text
    },
    {
        columnDef: 'option',
        columnName: 'Akcje',
        type: ETableConfigTypes.option,
        optionList: [
            {
                name: ETableOptionTypes.edit,
                iconName: 'edit'
            },
            {
                name: ETableOptionTypes.delete,
                iconName: 'delete'
            },
        ]
    }
]

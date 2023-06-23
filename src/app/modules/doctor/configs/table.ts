import { ETableConfigTypes, ETableOptionTypes } from "../../shared/models/table.enum";
import { ITableConfig } from "../../shared/models/table.interface";

export const doctorTable: ITableConfig[] = [
    {
        columnDef: 'name',
        columnName: 'Imię',
        type: ETableConfigTypes.text,
    },
    {
        columnDef: 'surname',
        columnName: 'Nazwisko',
        type: ETableConfigTypes.text,
    },
    {
        columnDef: 'nameSpecizalization',
        columnName: 'Specjalizacja',
        type: ETableConfigTypes.text,
    },
    {
        columnDef: 'nameBranch',
        columnName: 'Oddział',
        type: ETableConfigTypes.text,
    },
    {
        columnDef: 'dayCount',
        columnName: 'Ilość dni',
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

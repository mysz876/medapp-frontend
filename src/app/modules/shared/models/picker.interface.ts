import { FormControl } from "@angular/forms"
import { Observable } from "rxjs"

export interface IPickerConfig {
    label: string
    itemDef?: string
    control: FormControl
    data: Observable<any>
}

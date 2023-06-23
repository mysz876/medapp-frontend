import { Type } from "@angular/core";

export interface IModal {
    title: string,
    actionButtonText: string,
    description?: string,
    component?: Type<any>,
    extraData?: any,
}

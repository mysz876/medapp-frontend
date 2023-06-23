import { ActivatedRoute } from "@angular/router"

export interface IRoute {
    name: string
    route: string | string[]
    params?: object
    relative?: ActivatedRoute
}

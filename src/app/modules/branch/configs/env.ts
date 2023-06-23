import { environment } from "src/environments/environment"

const branch = environment.apiUrl
export const branchEnv = {
    main: `${branch}/branch`
}

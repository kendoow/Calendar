import Login from "../pages/Login"
import Event from "../pages/Event"

export interface InRoute {
    path:string;
    element: React.ComponentType;
}
export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}
export const publicRoutes:InRoute[] = [
    {
        path: RouteNames.LOGIN, element: Login
    }
]

export const privateRoutes:InRoute[] = [
    {
        path: RouteNames.EVENT, element: Event
    }
]
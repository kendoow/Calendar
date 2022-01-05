import { IEvent } from './../../../models/IEvent';
import { IUser } from './../../../models/IUser';


export interface EventState {
    guests:IUser[];
    events: IEvent[];
}

export enum EventsActionEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS"
}

export interface SetGuestAction {
    type:EventsActionEnum.SET_GUESTS,
    payload: IUser[]
}

export interface SetEventsAction {
    type:EventsActionEnum.SET_EVENTS,
    payload: IEvent[]
}

export type EventAction = 
        SetGuestAction |
        SetEventsAction
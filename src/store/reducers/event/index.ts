import { EventState, EventAction, EventsActionEnum } from './types';
const initialState: EventState = {
    events :[],
    guests: []
}
export default function EventReducer( state = initialState, action: EventAction): EventState{
    switch(action.type){
        case EventsActionEnum.SET_GUESTS:
            return {...state, guests:action.payload}
        case EventsActionEnum.SET_EVENTS:
            return{...state, events: action.payload}
        default:
            return state
    } 
}    
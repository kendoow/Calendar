import { AppDispatch } from './../../index';
import { IEvent } from './../../../models/IEvent';
import { IUser } from './../../../models/IUser';
import { EventsActionEnum, SetEventsAction, SetGuestAction } from "./types";
import axios from 'axios';
import UserService from '../../../api/UserService';

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestAction => ({type:EventsActionEnum.SET_GUESTS, payload}),
  setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventsActionEnum.SET_EVENTS, payload}),
  fetchGuests: () => async (dispatch: AppDispatch) => {
      try {
          const response = await UserService.getUsers()
          dispatch(EventActionCreators.setGuests(response.data))
      } catch (error) {
          console.log(error)
      }
  },
  createEvent: (event:IEvent) => async (dispatch: AppDispatch) => {
    try {
        const events = localStorage.getItem("events") || '[]'
        const json = JSON.parse(events) as IEvent[];
        json.push(event)
        dispatch(EventActionCreators.setEvents(json));
        localStorage.setItem('events', JSON.stringify(json))
    } catch (e) {
        console.log(e)
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) =>  {
    try {
        const events = localStorage.getItem("events") || '[]'
        const json = JSON.parse(events) as IEvent[];
        const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
        dispatch(EventActionCreators.setEvents(currentUserEvents))
    } catch (e) {
        
    }
  }
};

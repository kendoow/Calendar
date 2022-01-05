import { AppDispatch } from './../../index';
import { IEvent } from './../../../models/IEvent';
import { IUser } from './../../../models/IUser';
import { EventsActionEnum, SetEventsAction, SetGuestAction } from "./types";
import axios from 'axios';
import UserService from '../../../api/UserService';

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestAction => ({type:EventsActionEnum.SET_GUESTS, payload}),
  setEvenst: (payload: IEvent[]): SetEventsAction => ({type: EventsActionEnum.SET_EVENTS, payload}),
  fetchGuests: () => async (dispatch: AppDispatch) => {
      try {
          const response = await UserService.getUsers()
          dispatch(EventActionCreators.setGuests(response.data))
      } catch (error) {
          console.log(error)
      }
  }
};

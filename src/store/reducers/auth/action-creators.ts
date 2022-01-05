import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IUser } from "./../../../models/IUser";
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        setTimeout( async () => {
          const response = await UserService.getUsers()
          const mocUser = response.data.find(
            user => user.username === username && user.password === password
          );
          if (mocUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mocUser.username);
            dispatch(AuthActionCreators.setUser(mocUser));
            dispatch(AuthActionCreators.setIsAuth(true));
            console.log(mocUser)
          } else {
            dispatch(
              AuthActionCreators.setError("Некорректный логин или пароль")
            );
          }
          dispatch(AuthActionCreators.setIsLoading(false));
        }, 1000);
      } catch (error) {
        dispatch(AuthActionCreators.setError("Произошла ошибка при логине"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
      localStorage.removeItem('auth')
      localStorage.removeItem('username')
      dispatch(AuthActionCreators.setIsAuth(false))
      dispatch(AuthActionCreators.setUser({} as IUser))
  },
};

import { createReducer, on } from '@ngrx/store';
import { shortenUrlSuccess } from './app.actions';
import { AppState } from './app.state';

const initialState: AppState = {
  shortLinks: {
    link1: '',
    link2: '',
  },
};

export const appReducer = createReducer(
  initialState,
  on(shortenUrlSuccess, (state, { link1, link2 }) => {
    return { ...state, link1, link2 };
  })
);

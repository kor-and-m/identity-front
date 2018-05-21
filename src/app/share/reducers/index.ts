import {
  ActionReducerMap,
} from '@ngrx/store';


import * as fromScope from './scope';

import { iScope } from '../interfaces/scope';

export interface State {
  scopes: iScope[];
}

export const reducers: ActionReducerMap<State> = {
  scopes: fromScope.reducer
};

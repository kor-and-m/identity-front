import { createSelector } from '@ngrx/store';
import * as scope from '../actions/scope';

import { iScope } from '../interfaces/scope';

export function reducer(
  state = null,
  action: scope.ActionsUnion
): iScope[] {
  
  switch (action.type) {

    case scope.ScopeActionTypes.Init: {
      return action.scopes;
    }

    case scope.ScopeActionTypes.Load: {
      return [action.scope, ...state];
    }
    
    default: {
      return state;
    }
  }
}

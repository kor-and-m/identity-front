import { Action } from '@ngrx/store';
import { iScope } from '../interfaces/scope';

export enum ScopeActionTypes {
  Load = '[Scope] Load',
  Init = '[Scope] Init',
}

export class Load implements Action {
  readonly type = ScopeActionTypes.Load;

  constructor(public scope: iScope) {}
}

export class Init implements Action {
  readonly type = ScopeActionTypes.Init;

  constructor(public scopes: iScope[]) {}
}

export type ActionsUnion =
  | Load
  | Init;
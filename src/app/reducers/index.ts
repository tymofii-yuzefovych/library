import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {libraryNode, libraryReducer, LibraryState} from './library/library.reduser';

export interface State {
  [libraryNode]: LibraryState;
}

export const reducers: ActionReducerMap<State> = {
  [libraryNode]: libraryReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

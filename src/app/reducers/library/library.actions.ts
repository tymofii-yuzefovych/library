import {Action} from '@ngrx/store';

export enum libraryActionsType {
  create = '[BOOK] create'
}

export class LibraryCreateAction implements Action {
  readonly type = libraryActionsType.create;

  constructor(public payload: any) {
  }
}

export type LibraryActions = LibraryCreateAction;

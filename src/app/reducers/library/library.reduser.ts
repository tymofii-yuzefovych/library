import {IBook} from '../../models/ibook';
import {LibraryActions, libraryActionsType} from './library.actions';

export const libraryNode = 'books';

export interface LibraryState {
  currentId: number;
  books: IBook[];
}

const initialState: LibraryState = {
  currentId: 1,
  books: []
};

export const libraryReducer = (state = initialState, action: LibraryActions) => {
  switch (action.type) {
    case libraryActionsType.create:
      return {
        ...state,
        currentId: state.currentId + 1,
        books: [
          ...state.books,
          {
            id: state.currentId,
            title: action.payload.title,
            author: action.payload.author,
            description: action.payload.description,
            pagesQuantity: action.payload.pagesQuantity,
            createdOn: new Date(),
            updatedAt: new Date(),
          }
        ]
      };
    default:
      return state;
  }
};

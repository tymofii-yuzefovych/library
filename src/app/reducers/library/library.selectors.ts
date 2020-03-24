import {createFeatureSelector, createSelector} from '@ngrx/store';
import {libraryNode, LibraryState} from './library.reduser';
import {IBook} from '../../models/ibook';

export const selectLibraryFeature = createFeatureSelector<LibraryState>(libraryNode);

export const selectBooksFeature = createSelector(
  selectLibraryFeature,
  (state: LibraryState): Array<IBook> => state.books
);

const selectArticles = createFeatureSelector<LibraryState>(libraryNode);

export const selectArticlesById = createSelector(
  selectLibraryFeature,
  (books, props) => {
    return books.books.filter(book => book.id === props.id);
  }
);

export const selectAuthors = createSelector(
  selectLibraryFeature,
  (books) => {
    return books.books.map(book => book.author);
  },
);

export const uniqueAuthors = createSelector(
  selectAuthors,
  (authors) => {
    return authors.filter((item, index) => {
      return authors.indexOf(item) === index;
    });
  },
);


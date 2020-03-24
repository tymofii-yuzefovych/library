import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {IBook} from '../../models/ibook';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LibraryState} from '../../reducers/library/library.reduser';
import {Store} from '@ngrx/store';
import {LibraryCreateAction} from '../../reducers/library/library.actions';
import {MatSnackBar} from '@angular/material';
import {uniqueAuthors} from '../../reducers/library/library.selectors';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  public authors: any = [];
  newBook: IBook = {
    id: null,
    title: '',
    author: '',
    pagesQuantity: 0,
    description: ''
  };
  submitted = false;
  bookForm: FormGroup;
  @ViewChild('f', {static: false}) myNgForm;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private storeLibrary$: Store<LibraryState>,
    private snackBar: MatSnackBar
) { }

  ngOnInit() {
    this.titleService.setTitle('Create new book');

    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', Validators.required],
      pagesQuantity: [0]
    });

    this.storeLibrary$.select(uniqueAuthors).subscribe((authors) => {
      this.authors = authors;
    });
  }

  onCreate() {
    this.submitted = true;
    if (this.bookForm.status === 'INVALID') {return; }
    this.createObj();
    this.storeLibrary$.dispatch(new LibraryCreateAction(this.newBook));
    this.openSnackBar('Book created', '' );
    this.resetForm();
    this.submitted = false;
  }

  resetForm() {
    this.bookForm.reset();
    this.myNgForm.resetForm();
    this.newBook = {
      id: null,
      title: '',
      author: '',
      pagesQuantity: 0,
      description: ''
    };
  }

  createObj() {
    this.newBook.title = this.bookForm.value.title;
    this.newBook.author = this.bookForm.value.author;
    this.newBook.pagesQuantity = this.bookForm.value.pagesQuantity;
    this.newBook.description = this.bookForm.value.description;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'center-snack'
    });
  }
}

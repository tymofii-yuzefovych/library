import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {LibraryState} from '../../reducers/library/library.reduser';
import {selectBooksFeature} from '../../reducers/library/library.selectors';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-init-layout',
  templateUrl: './init-layout.component.html',
  styleUrls: ['./init-layout.component.scss']
})
export class InitLayoutComponent implements OnInit {
  public books;
  constructor(
    private storeLibrary$: Store<LibraryState>,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Library');
    this.storeLibrary$.pipe(select(selectBooksFeature)).subscribe(value => this.books = value );
  }
}

import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {IBook} from '../../models/ibook';
import {ActivatedRoute, Router} from '@angular/router';
import {LibraryState} from '../../reducers/library/library.reduser';
import {select, Store} from '@ngrx/store';
import {selectArticlesById} from '../../reducers/library/library.selectors';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public book: IBook;
  public id;
  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private storeLibrary$: Store<LibraryState>,
    private router: Router
) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (!this.id) {
        this.router.navigate(['/']).then();
        return;
      }
      this.storeLibrary$
        .pipe(select(selectArticlesById, { id: this.id }))
        .subscribe(vl => this.book = vl[0]);
      if (!this.book) {
        this.router.navigate(['/']).then();
        return;
      }
      this.titleService.setTitle(this.book.title);
      selectArticlesById.release();
    });
  }

}

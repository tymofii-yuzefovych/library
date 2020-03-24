import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../models/ibook';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() data: IBook;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}

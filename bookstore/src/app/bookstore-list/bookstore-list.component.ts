import { Component, OnInit, Input } from '@angular/core';
import { Books } from '../book-list';
import { Book } from '../book';

@Component({
  selector: 'app-bookstore-list',
  templateUrl: './bookstore-list.component.html',
  styleUrls: ['./bookstore-list.component.scss']
})
export class BookstoreListComponent implements OnInit {

  books = Books;
  selectedBook: Book;

  constructor() { }

  ngOnInit() {

  }

  onSelect(book: Book){
    this.selectedBook = book;
  }



}

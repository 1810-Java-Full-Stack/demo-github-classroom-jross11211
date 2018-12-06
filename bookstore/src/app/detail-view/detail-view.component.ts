import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  query: string = '';
  constructor(private _bookService: BooksService) { }

  ngOnInit(): void {
    
  }

  onKey(event: any) {
    this.query = event.target.value;
    this._bookService.toggleSideNav(this.query);
  }

}

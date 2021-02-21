import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from "../../interfaces/book";

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  bookPersistence: Book[] = [];
  books: Book[] = [
    {
      id: 1,
      title: "Mcleod  Mueller",
      year: 2005,
      genre: "Magic",
      number_pages: 300,
      id_autor: 1,
      author:"Jk Rowling",
      id_publisher: 1,
      publisher:"Universal Library"
    },
    {
      id: 2,
      title: "Day  Meyers",
      year: 2005,
      genre: "Magic",
      number_pages: 300,
      id_autor: 1,
      author:"Jk Rowling",
      id_publisher: 1,
      publisher:"Universal Library"
    },
    {
      id: 3,
      title: "Aguirre  Ellis",
      year: 2005,
      genre: "Magic",
      number_pages: 300,
      id_autor: 1,
      author:"Jk Rowling",
      id_publisher: 1,
      publisher:"Universal Library"
    },
    {
      id: 4,
      title: "Cook  Tyson",
      year: 2005,
      genre: "Magic",
      number_pages: 300,
      id_autor: 1,
      author:"Jk Rowling",
      id_publisher: 1,
      publisher:"Universal Library"
    },
    {
      id: 5,
      title: "Harry Potter",
      year: 2005,
      genre: "Magic",
      number_pages: 300,
      id_autor: 1,
      author:"Jk Rowling",
      id_publisher: 1,
      publisher:"Universal Library"
    }
  ];

  constructor(private _bookService: BooksService) { }

  ngOnInit(): void {
    this._bookService.onSideNavToggle().subscribe(
      (message) => {
        this.searchBooks(message);
        console.log("Mensaje recibido desde navbar");
      },
      (error) => {
        this.bookPersistence = [...this.books];
      }
    );
    this._bookService.getAll().subscribe(
      (resp: any) => {
        this.books = resp;
        this.bookPersistence = [...this.books];
      },
      (error) => {
        console.log(error);
      });
  }

  searchBooks(query: string) {
    if (query.length > 2) {
      this.books = [...this.bookPersistence];
      this.books = this.books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()) || book.year.toString() == query || book.author.toLowerCase().includes(query.toLowerCase()));
    } else if(query.length == 0) {
      this.books = [...this.bookPersistence];
    }
  }
}

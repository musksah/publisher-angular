import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

const API_URL = environment.baseApi + '/book';

@Injectable({
  providedIn: 'root'
})


export class BooksService {

  private sidenavOpenSubject: Subject<string>;

  constructor(private http: HttpClient) {
    this.sidenavOpenSubject = new Subject<string>();
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(API_URL);
  }

  toggleSideNav(cadena: string): void {
    this.sidenavOpenSubject.next(cadena);
  }

  onSideNavToggle(): Observable<string> {
    return this.sidenavOpenSubject;
  }
}



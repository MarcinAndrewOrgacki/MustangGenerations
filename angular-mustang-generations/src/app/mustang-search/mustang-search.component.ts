import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Mustang } from '../mustang';
import { MustangService } from '../mustang.service';

@Component({
  selector: 'app-mustang-search',
  templateUrl: './mustang-search.component.html',
  styleUrls: [ './mustang-search.component.css' ]
})

export class MustangSearchComponent implements OnInit {
  mustangs$!: Observable<Mustang[]>;
  
  private searchTerms = new Subject<string>();

  constructor(private mustangService: MustangService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.mustangs$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.mustangService.searchMustangs(term)),
    );
  }
}

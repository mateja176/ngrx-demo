import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectName, State } from './store/reducer';

@Component({
  selector: 'app-hello',
  template: `
    <p>Hello {{ name$ | async }}</p>
  `,
})
export class HelloComponent implements OnInit {
  name$: Observable<string>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.name$ = this.store.pipe(select(selectName));
  }
}

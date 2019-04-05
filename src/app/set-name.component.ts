import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetName } from './store/actions/name';
import { State } from './store/reducer';

@Component({
  selector: 'app-set-name',
  template: `
    <input #nameInput placeholder="Name" />
    <button (click)="setName(nameInput.value)">Set name</button>
  `,
})
export class SetNameComponent {
  constructor(private store: Store<State>) {}

  setName(name: string) {
    this.store.dispatch(new SetName(name));
  }
}

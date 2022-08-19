import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  subject = new BehaviorSubject(false);

  constructor() {}

  hide() {
    this.subject.next(false);
  }

  show() {
    this.subject.next(true);
  }
}

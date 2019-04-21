import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userActivated = new Subject(); //subject combine observable and observer in one convenient object
  constructor() { }
}

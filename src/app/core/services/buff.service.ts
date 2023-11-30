import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { buff } from '../models/buff-items';

@Injectable({
  providedIn: 'root',
})
export class BuffService {
  private buffSubject: BehaviorSubject<buff[]> = new BehaviorSubject<buff[]>(
    [],
  );

  getBuff(): Observable<buff[]> {
    return this.buffSubject.asObservable();
  }

  updateBuff(newBuff: buff[]) {
    this.buffSubject.next([...newBuff]);
  }
}

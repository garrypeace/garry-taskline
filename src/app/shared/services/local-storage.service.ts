import { Injectable } from '@angular/core';
import { IDatasource } from '../model/datasource';
import { IItem } from '../model/item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements IDatasource {
  collectionName = 'TASKS';

  constructor() {}
  create(item: any): void {
    if (!localStorage.getItem(this.collectionName)) {
      console.log('data doesnt exist');
      localStorage.setItem(this.collectionName, '[]');
    }

    let items = this.getItemsFromLocalStorage();
    items.push(item);
    localStorage.setItem(this.collectionName, JSON.stringify(items));
  }
  update(item: any): void {
    throw new Error('Method not implemented.');
  }
  get(item: any): Observable<IItem> {
    throw new Error('Method not implemented.');
  }
  list(): Observable<IItem[]> {
    return of(this.getItemsFromLocalStorage());
  }
  delete(item: any): void {
    let items = this.getItemsFromLocalStorage();
    items = items.filter((i) => i.id !== item.id);
    localStorage.setItem(this.collectionName, JSON.stringify(items));
  }
  getItemsFromLocalStorage(): IItem[] {
    let items = localStorage.getItem(this.collectionName) ?? '[]';
    return JSON.parse(items) as IItem[];
  }
}

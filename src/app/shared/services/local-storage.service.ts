import { Injectable } from '@angular/core';
import { IDatasource } from '../model/datasource';
import { IItem } from '../model/item';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements IDatasource {
  public collectionName: string = 'GP_ITEMS';

  private _data$ = new BehaviorSubject<IItem[]>([]);
  private data$ = this._data$.asObservable();

  constructor() {
    if (!localStorage.getItem(this.collectionName)) {
      localStorage.setItem(this.collectionName, '[]');
    }

    this._data$.next(this.getItemsFromLocalStorage());
  }

  create(item: any): void {
    let items = this.getItemsFromLocalStorage();
    items.push(item);
    localStorage.setItem(this.collectionName, JSON.stringify(items));
    this._data$.next(this.getItemsFromLocalStorage());
  }

  update(item: IItem): void {
    let items = this.getItemsFromLocalStorage();
    items.splice(items.indexOf(item));
    items.push(item);
    localStorage.setItem(this.collectionName, JSON.stringify(items));
    this._data$.next(this.getItemsFromLocalStorage());
  }

  get(item: any): Observable<IItem> {
    throw new Error('Method not implemented.');
  }

  list(): Observable<IItem[]> {
    return this.data$;
  }

  delete(item: any): void {
    let items = this.getItemsFromLocalStorage();
    items = items.filter((i) => i.id !== item.id);
    localStorage.setItem(this.collectionName, JSON.stringify(items));
    this._data$.next(this.getItemsFromLocalStorage());
  }

  getItemsFromLocalStorage(): IItem[] {
    let items = localStorage.getItem(this.collectionName) ?? '[]';
    return JSON.parse(items) as IItem[];
  }
}

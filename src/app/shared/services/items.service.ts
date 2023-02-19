import { BehaviorSubject } from 'rxjs';
import { IItem } from '../model/item';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private datasource: LocalStorageService) {}

  add(note: string) {
    this.datasource.create({
      id: uuidv4(),
      note: note,
      dismissed: false,
      reminderDate: Date.now(),
    });
  }

  update(item: IItem) {
    this.datasource.update(item);
  }

  delete(item: IItem) {
    this.datasource.delete(item);
  }

  get() {
    return this.datasource.list();
  }
}

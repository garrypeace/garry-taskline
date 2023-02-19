import { ItemsService } from './../shared/services/items.service';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IItem } from '../shared/model/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurfaceComponent implements OnInit {
  public _items: Observable<IItem[]> | undefined;
  @ViewChild('input', { static: false }) input: any;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {}

  add(note: string) {
    this.itemsService.add(note);
  }

  dismiss(item: IItem) {
    this.itemsService.delete(item);
  }

  get items() {
    return this.itemsService.get();
  }

  onCtrlEnter(note: ElementRef<HTMLInputElement> | any) {
    if (note.value.trim().length === 0) return;

    this.add(note.value);
    note.value = '';
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IItem } from '../shared/model/item';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurfaceComponent implements OnInit {
  public items: Observable<IItem[]> | undefined;
  @ViewChild('input', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.getAllActive();
  }

  add(note: string) {
    this.localStorageService.create({
      id: uuidv4(),
      note: note,
    } as IItem);
    this.getAllActive();
  }

  dismiss(item: IItem) {
    this.localStorageService.delete(item);
    this.items = this.localStorageService.list();
  }

  getAllActive() {
    this.items = this.localStorageService.list();
  }

  onCtrlEnter(note: ElementRef<HTMLInputElement> | any) {
    this.add(note.value);
    note.value = '';
  }
}

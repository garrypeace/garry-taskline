import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IItem } from '../shared/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input() item: IItem | undefined;
  @Output() removeItemEvent = new EventEmitter<string>();

  dismiss(value: any) {
    this.removeItemEvent.emit(value);
  }
}

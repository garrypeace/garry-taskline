import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IItem } from '../model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input() item: IItem | undefined;
}

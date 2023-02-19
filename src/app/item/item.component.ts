import { ItemsService } from './../shared/services/items.service';
import { MatDialog } from '@angular/material/dialog';
import { PostponeChoiceComponent } from './../postpone-choice/postpone-choice.component';
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
  constructor(public dialog: MatDialog, private itemsService: ItemsService) {}

  @Input() item!: IItem;
  @Output() removeItemEvent = new EventEmitter<string>();

  dismiss(value: any) {
    this.removeItemEvent.emit(value);
  }

  open() {
    const dialogRef = this.dialog.open(PostponeChoiceComponent);

    dialogRef.afterClosed().subscribe((addon: number) => {
      this.item.reminderDate = Date.now() + addon;
      this.itemsService.update(this.item);
    });
  }
}

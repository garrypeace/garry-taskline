import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IItem } from '../model/item';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurfaceComponent implements OnInit {
  public items: Observable<IItem[]> | undefined;

  ngOnInit() {
    this.items = of([
      {
        id: '1623c069-6922-41d5-9779-4584a50c6086',
        note: `Make sure you do the thing. Remember to mention this specific thing and don't forgot to ask about how to do the task which involves stuff about other stuff.`,
      },
      {
        id: 'dee8606a-b55e-4c8a-a6e2-1bb53c10b4ed',
        note: `Speak to that person about that thing`,
      },
    ]);
  }
}

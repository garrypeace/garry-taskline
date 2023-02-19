import { MILLIS_1HR } from './../shared/model/time';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export type PostponeChoice = { label: string; value: number };

@Component({
  selector: 'app-postpone-choice',
  templateUrl: './postpone-choice.component.html',
  styleUrls: ['./postpone-choice.component.scss'],
})
export class PostponeChoiceComponent {
  public choices: PostponeChoice[] = [
    { label: '1hr', value: MILLIS_1HR },
    { label: '2hr', value: MILLIS_1HR * 2 },
    { label: '4hr', value: MILLIS_1HR * 4 },
  ];

  constructor(public dialogRef: MatDialogRef<PostponeChoiceComponent>) {}

  makeChoice(value: any) {
    this.dialogRef.close(value);
  }
}

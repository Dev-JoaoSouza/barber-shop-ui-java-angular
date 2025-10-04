import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-yes-no-dialog',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './yes-no-dialog.html',
  styleUrl: './yes-no-dialog.scss'
})
export class YesNoDialog {

  constructor(@Inject(MAT_DIALOG_DATA) readonly data: any) {}
}

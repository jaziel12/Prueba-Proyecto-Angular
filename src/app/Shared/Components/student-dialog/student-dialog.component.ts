import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [],
})
export class StudentDialogComponent {
  firstNameControl = new FormControl();
  lastNameControl = new FormControl();
  studentForm = new FormGroup({
    firstNameControl: this.firstNameControl,
    lastNameControl: this.lastNameControl,
  });
  constructor(private readonly dialogRef: DialogRef) {}
  close() {
    this.dialogRef.close();
  }
}

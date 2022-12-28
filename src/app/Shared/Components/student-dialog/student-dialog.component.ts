import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Student } from '../students.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [],
})
export class StudentDialogComponent {
  firstNameControl = new FormControl();
  lastNameControl = new FormControl();
  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
  });
  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Student | null
  ) {
    console.log(data);
    if (data) {
      this.studentForm.patchValue(data);
    }
  }
  close() {
    this.dialogRef.close();
  }
}

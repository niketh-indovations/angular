import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-row-data',
  templateUrl: './row-data.component.html',
  styleUrls: ['./row-data.component.css']
})
export class RowDataComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<RowDataComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data)
  }

  closeIt(){
    this.dialogRef.close('close');
  }
  ngOnDestroy(){
    this.data='';
  }

}

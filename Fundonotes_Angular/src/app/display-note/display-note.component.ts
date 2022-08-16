import { Component, OnInit,Input } from '@angular/core';
import{MatDialog}from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
@Input()NotesList:any;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(note:any)
  {
    console.log(note);
    this.dialog.open(UpdatenoteComponent,{
      data:{
        selectednote:note
      }
      
    });
  }




}

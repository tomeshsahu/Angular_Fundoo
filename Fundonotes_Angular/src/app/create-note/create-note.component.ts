import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteUserService } from 'src/Services/NoteService/note-user.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  CreateNoteForm!: FormGroup;
  submitted = false;
  closenote:boolean=false;
  openIcon:boolean=true;
  openIcon2:boolean=false;

  constructor(private formBuilder:FormBuilder,private notee:NoteUserService) { }

  ngOnInit(): void {
    this.CreateNoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      bgcolor: 'Blue'
    });
  }
   // convenience getter for easy access to form fields
   get f() { return this.CreateNoteForm.controls; }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.CreateNoteForm.invalid) {
        return;
    }
    console.log(this.CreateNoteForm.value);
    let reqdata={
      Title: this.CreateNoteForm.value.title,
      Description: this.CreateNoteForm.value.description,
      BgColor: this.CreateNoteForm.value.bgcolor,
    }
    this.notee.createNote(reqdata).subscribe((response:any)=>{
      console.log(response);
    })
}


  opennote()
  {
    this.closenote=true;
    this.openIcon=false;
    this.openIcon2=true;
  }
  close()
  {
    this.closenote=false;
    this.openIcon=true;
    this.openIcon2=false;
  }

}

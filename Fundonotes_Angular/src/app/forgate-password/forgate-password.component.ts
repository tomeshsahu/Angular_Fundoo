import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/Services/UserService/user-service.service';

@Component({
  selector: 'app-forgate-password',
  templateUrl: './forgate-password.component.html',
  styleUrls: ['./forgate-password.component.scss']
})
export class ForgatePasswordComponent implements OnInit {
  forgatepassword!: FormGroup;
  submited = false;

  constructor(private formBuilder:FormBuilder,private forgatepass:UserServiceService) { }

  ngOnInit(): void {
    this.forgatepassword = this.formBuilder.group({
      Email: ['', Validators.required],
  })
}

onSubmit() {
  this.submited = true;
  if (this.forgatepassword.invalid) {
    return;
}
let reqData={
  email:this.forgatepassword.value.Email,
}
this.forgatepass.forgatepass(reqData).subscribe((response:any)=>
{
  console.log(response);
});
}
}
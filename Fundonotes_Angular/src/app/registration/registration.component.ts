import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/Services/UserService/user-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registration!: FormGroup;
  submited = false;

  constructor(private formBuilder: FormBuilder, private user: UserServiceService) { }

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    });
  }

  get f() { return this.registration.controls; }
  onSubmit() {
    this.submited = true;

    // stop here if form is invalid
    if (this.registration.invalid) {
      return;
      //confirm:this.registration.value.confirm
    }
    let reqData = {
      Firstname: this.registration.value.firstname,
      Lastname: this.registration.value.lastname,
      Email: this.registration.value.username,
      Password: this.registration.value.password,
    }
    this.user.registration(reqData).subscribe((response: any) => {
      console.log(response);

    })
  }

}

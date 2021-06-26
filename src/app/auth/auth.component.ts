import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup
    constructor() {}

    ngOnInit(): void {
      this.form = new FormGroup({
        username: new FormControl(null, []),
        password: new FormControl(null, [])
      })
    }

    onSubmit(){
      console.log(this.form.value)
    }
}

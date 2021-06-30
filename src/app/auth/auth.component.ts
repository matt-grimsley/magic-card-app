import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup
    constructor(private modalService: NgbModal) {}

    ngOnInit(): void {
      this.form = new FormGroup({
        username: new FormControl(null, []),
        password: new FormControl(null, [])
      })
    }

    onSubmit(){
      console.log(this.form.value)
    }

    openFormModal() {
      const modalRef = this.modalService.open(SignupComponent);

      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error)=> {
        console.log(error);
      });
    }
}

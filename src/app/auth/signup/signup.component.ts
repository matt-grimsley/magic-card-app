import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
        this.createForm();
    }
    ngOnInit(): void {}

    private createForm() {
        this.signupForm = this.formBuilder.group({
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    submitForm() {
        debugger;
        console.log(this.signupForm.value);
    }

    closeModal() {
        this.activeModal.close();
    }
}

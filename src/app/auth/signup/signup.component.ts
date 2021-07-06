import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MustMatch } from './must-match.validator';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    hasErrors: false;
    constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
        this.createForm();
    }
    ngOnInit(): void {}

    private createForm() {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
        }, {validator: MustMatch('password', 'confirmPassword')})
        // , {validators: this.checkPasswords});
    }

    submitForm() {
        console.log(this.signupForm.value);
    }

    private checkPasswords(group: FormGroup) {
        const password = group.controls.password.value
        const confirmPassword = group.controls.confirmPassword.value

        return password === confirmPassword ? null : { notSame: true };
    }

    closeModal() {
        this.activeModal.close();
    }
}

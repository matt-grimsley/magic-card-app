import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../auth.service';
import { MustMatch } from './must-match.validator';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {
        this.createForm();
    }
    ngOnInit(): void {}

    private createForm() {
        this.signupForm = this.formBuilder.group(
            {
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(8)]],
                confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
            },
            { validator: MustMatch('password', 'confirmPassword') }
        );
        // , {validators: this.checkPasswords});
    }

    submitForm() {
        console.log(this.signupForm.value);
        if (!this.signupForm.valid) {
            return;
        }

        const email = this.signupForm.value.email;
        const password = this.signupForm.value.password;

        let authObs: Observable<AuthResponseData>;

        authObs = this.authService.signup(email, password);

        authObs.subscribe(
            (response) => {
                console.log(response);
                console.log('signup success!');
                Swal.fire('Signup success!', 'Congratulations! You can now use the app as a registered member.', 'success');
                this.closeModal();
            },
            (errorRes) => {
                console.log(errorRes);
                Swal.fire('Uh Oh...', errorRes, 'error');
            }
        );

        this.signupForm.reset();
    }

    private checkPasswords(group: FormGroup) {
        const password = group.controls.password.value;
        const confirmPassword = group.controls.confirmPassword.value;

        return password === confirmPassword ? null : { notSame: true };
    }

    closeModal() {
        this.activeModal.close();
    }
}

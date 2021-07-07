import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    form: FormGroup;
    hasError = false;
    error: string = null;
    constructor(
        private modalService: NgbModal,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, []),
            password: new FormControl(null, [])
        });
    }

    onSubmit() {
        if (!this.form.valid) {
            return;
        }
        const email = this.form.value.email;
        const password = this.form.value.password;

        let authObs: Observable<AuthResponseData>;

        authObs = this.authService.login(email, password);

        authObs.subscribe(
            (response) => {
                console.log(response);
                console.log('login success!');
            },
            (errorRes) => {
                console.log(errorRes);
                this.hasError = true;
                this.error = errorRes;
            }
        );
    }

    openFormModal() {
        const modalRef = this.modalService.open(SignupComponent);

        modalRef.result
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

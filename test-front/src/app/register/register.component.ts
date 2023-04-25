import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../api/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  ngOnInit() {
    document.body.style.background = 'rgb(59,173,252)';
  }

  //Makes it so that the bg color is only loaded for this component only.
  ngOnDestroy(): void {
    document.body.style.background = 'white';
  }

  constructor(
    private registerFb: FormBuilder,
    private api: ServicesService,
    private registerRouter: Router
  ) {}

  //Form group
  registerForm = this.registerFb.group({
    //form array
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    address: [
      '',
      [Validators.required, Validators.pattern('[0-9a-zA-Z-,. ]*')],
    ],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    dob: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        ),
      ],
    ],
    course: ['', Validators.required],
    gender: ['', Validators.required],
  });

  registerErrorMsg: string = '';
  registerSuccessMsg: string = '';

  register() {
    if (this.registerForm.valid) {
      let firstName = this.registerForm.value.firstName;
      let lastName = this.registerForm.value.lastName;
      let address = this.registerForm.value.address;
      let email = this.registerForm.value.email;
      let mobile = this.registerForm.value.mobile;
      let dob = this.registerForm.value.dob;
      let course = this.registerForm.value.course;
      let gender = this.registerForm.value.gender;
      this.api
        .register(
          firstName,
          lastName,
          address,
          email,
          mobile,
          dob,
          course,
          gender
        )
        .subscribe(
          (result: any) => {
            // this.registerSuccessMsg = result.message;
            this.registerSuccessMsg = result.message;

            setTimeout(() => {
              this.registerRouter.navigateByUrl('');
            }, 3000);
          },
          (result: any) => {
            this.registerErrorMsg = result.error.message;
            setTimeout(() => {
              this.registerForm.reset();
              this.registerErrorMsg = '';
            }, 4000);
          }
        );
    } else {
      alert('Invalid');
    }
  }

  clearAll() {
    this.registerForm.reset();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  register(
    firstName: any,
    lastName: any,
    address: any,
    email: any,
    mobile: any,
    dob: any,
    course: any,
    gender: any
  ) {
    const body = {
      firstName,
      lastName,
      address,
      email,
      mobile,
      dob,
      course,
      gender,
    };
    console.log('inside service');
    console.log(body);

    return this.http.post('http://localhost:3000/register', body);
  }

  displayAll() {
    return this.http.get('http://localhost:3000/displayAll');
  }
}

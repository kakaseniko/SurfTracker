import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {

  email: string = "";
  password: string = "";
  confirm_password: string ="";
  constructor() { }

  ngOnInit() {}

  onSubmit() {
    alert(
     this.email + ', ' + this.password
    )
 }
}

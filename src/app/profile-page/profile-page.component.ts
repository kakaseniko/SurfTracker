import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {

  email: string = "test@test.com";
  password: string = "";
  confirm_password: string ="";
  old_password: string = "";
  skill_level: string = "";
  constructor() { }

  ngOnInit() {}

  onSubmit() {
    alert(
     this.email + ', ' + this.password
    )
 }

}

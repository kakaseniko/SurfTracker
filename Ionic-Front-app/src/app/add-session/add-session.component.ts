import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss'],
})
export class AddSessionComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onRatingUpdated(rating: number) {
    console.log(`New rating: ${rating}`);
  }

  onSubmit() {
    alert(
      'Session added'
    )
 }
}

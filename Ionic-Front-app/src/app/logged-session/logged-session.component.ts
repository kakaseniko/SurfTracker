import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../models/session';

@Component({
  selector: 'app-logged-session',
  templateUrl: './logged-session.component.html',
  styleUrls: ['./logged-session.component.scss'],
})
export class LoggedSessionComponent implements OnInit {
  @Input() session: Session;

  constructor() { }

  ngOnInit() {}

}

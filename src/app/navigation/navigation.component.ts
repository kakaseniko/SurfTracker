import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isMobile$ = this.platform.is('mobile');
  isLoggedIn = false;

  constructor(private platform: Platform) { }

  ngOnInit() {}

}

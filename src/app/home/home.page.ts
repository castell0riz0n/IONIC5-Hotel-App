import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = 'Ready To create an app ?';
  constructor() { }


  ChangeText() {
    return this.text = 'you bitch clicked me';
  }
}

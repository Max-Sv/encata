import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser = {
    name: "Guest",
    avatar: '../../assets/image/profile.png'
  }
  constructor() { }

  ngOnInit() {
  }

}

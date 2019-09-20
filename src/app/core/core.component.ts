import { Component, OnInit } from '@angular/core';
import { CoreService, IUser } from '../core/core.service';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  public currentUser: IUser;
  public profileState = true;
  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.currentUser = this.coreService.getCurrentUser();
  }
  onChanged(state) {
    this.profileState = state;
  }

}

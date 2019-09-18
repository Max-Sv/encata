import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public id: any;
  constructor(
    private activateRoute: ActivatedRoute,
  ) {
    // this.id = this.activateRoute.snapshot.params['id'];
    this.activateRoute.params.subscribe(id => this.id = id.id);
  }

  ngOnInit() {
  }

}

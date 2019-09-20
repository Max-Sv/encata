import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreService, IUser } from '../core/core.service';
import { Router } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: IUser[];
  public _users: any[];

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'button'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    private coreServise: CoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.users = this.coreServise.getUsers();
    this._users = [...this.users];
    this._users.map(user => user.button = 'Get ID');
    this.dataSource = new MatTableDataSource(this._users);
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  navigateTo(id) {
    this.router.navigate(['/users', id[0]]);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreService, IUser } from '../core/core.service';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any;

  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource: MatTableDataSource<IUser>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    private coreServise: CoreService
  ) { }

  ngOnInit() {
    this.users = this.coreServise.getUsers();
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

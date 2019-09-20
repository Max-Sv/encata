import { Injectable } from '@angular/core';
export interface IUser {
  id?: number;
  name: string;
  email?: string;
  phone?: string;
  password?: string;
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private users: IUser[] = [
    { id: 12, name: 'Ann', email: 'ann@gmail.com', phone: '+375 29 1257456' },
    { id: 2, name: 'Alex', email: 'alex@gmail.com', phone: '+375 33 3457456' },
    { id: 145, name: 'Nick', email: 'nick@gmail.com', phone: '+375 29 3457456' },
    { id: 5, name: 'Max', email: 'max@gmail.com', phone: '+375 29 2537456' },
    { id: 89, name: 'Alen', email: 'alen@gmail.com', phone: '+375 33 1457456' },
    { id: 44, name: 'Tom', email: 'tom@gmail.com', phone: '+375 44 3457585' },
  ];

  private currentUser: IUser;

  constructor() {
    this.currentUser = {
      name: 'Guest',
      avatar: '../../assets/image/profile.png'
    };

  }

  getUsers = (): IUser[] => this.users;
  getCurrentUser = (): IUser => this.currentUser;

}

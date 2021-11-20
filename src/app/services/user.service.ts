import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { User} from '../models/user.model'

// export class USERS {
//   'ID': string;
//   'Name': string;
//   'Password': string;
//   'Mobile': string;  
// }

let users: User[] = [
  {'ID': "1", Name: 'Midhun', Password: "9972151617", Mobile: "9972151617"},
  {'ID': "2", Name: 'Anil', Password: "9972151617", Mobile: "9972151617"},
  {'ID': "3", Name: 'Chandru', Password: "9972151617", Mobile: "9972151617"},
  {'ID': "4", Name: 'Chetan', Password: "9972151617", Mobile: "9972151617"},
  {'ID': "5", Name: 'Aniket', Password: "9972151617", Mobile: "9972151617" }
];
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: any
  
  private dbPath = '/users';

  Users: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.Users = db.list(this.dbPath);
  }

  getAll(): AngularFireList<User> {
    return this.Users;
  }

  create(user: User): any {
    console.log(user); 
    return this.Users.push(user);
  }

  update(key: string, value: any): Promise<void> {  
    return this.Users.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.Users.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.Users.remove();
  }
}

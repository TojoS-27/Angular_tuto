import { User } from "../models/user.model";
import { Subject } from "rxjs";

export class UserService {
  private users: User[] = [
    {
      firstname: "Tojo Stéphan",
      lastname: "Razafiarison",
      email: "tojo@gmail.com",
      drinkPreference: "Galeoka",
      hobbies: ["Football", "Music"]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}

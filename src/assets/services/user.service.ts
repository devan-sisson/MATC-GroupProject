
import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2/database";
import {User} from "../models/user.interface";

@Injectable()
export class UserService {
  abs: string = "";
  users: FirebaseListObservable<any>;
  names: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    db.app.auth().signInWithEmailAndPassword("cole2bass@gmail.com", "C0!eP!@y95");
    this.names = db.list("https://matc-ionic-movies.firebaseio.com/names");
    this.users = db.list("https://matc-ionic-movies.firebaseio.com/users/users");
  }

  addName(newName: string) {
    this.names.push({name: newName});
  }

  addNewUser(user: User) {
    this.db.app.auth().createUserWithEmailAndPassword(user.email, user.password);
    this.users.push(user);
  }

  getUser(id/*: string | number*/) {
    return this.db.list("https://matc-ionic-movies.firebaseio.com/users/users/"+id);
  }

  getNames() {
    return this.names;
  }

}

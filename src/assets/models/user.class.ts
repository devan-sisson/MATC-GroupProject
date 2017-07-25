import {User} from "./user.interface";
import {MiniMovie} from "./movie-mini.interface";
import {MiniUser} from "./user-mini.interface";
import {AngularFireDatabase} from "angularfire2/database";

export class UserProfile implements User {
  firstName: string;
  lastName: string;
  password: string;
  userId: string;
  gender: string;
  email: string;
  cellPhone: string;
  favoriteMovies: MiniMovie[];
  friends: MiniUser[];
  recommendedMovies: MiniMovie[];
  recommendedByFriends: MiniMovie[];
  city: string;
  pic1: string;
  pic2: string;

  private auth: AngularFireDatabase

  constructor() {}

  updateUser(user: User) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.userId = user.userId;
    this.password = user.password;
    this.gender = user.gender;
    this.email = user.email;
    this.cellPhone = user.cellPhone;
    this.favoriteMovies = user.favoriteMovies;
    this.friends = user.friends;
    this.recommendedMovies = user.recommendedMovies;
    this.recommendedByFriends = user.recommendedByFriends;
    this.city = user.city;
    this.pic1 = user.pic1;
    this.pic2 = user.pic2;
  }

}
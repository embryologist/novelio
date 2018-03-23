import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login(mode = "google") {
    setTimeout(async () => {
      let provider;

      switch (mode) {
        case "google":
          provider = new firebase.auth.GoogleAuthProvider();
          break;
        default:
          provider = new firebase.auth.GoogleAuthProvider();
      }
      await this.afAuth.auth.setPersistence(
        firebase.auth.Auth.Persistence.LOCAL
      );
      const login = await this.afAuth.auth.signInWithPopup(provider);
      console.log(login);
      this.afterLogin(login);
    }, 1000);
  }

  afterLogin(loginData) {
    /** First, store required data in localStorage */
    localStorage.setItem("uid", loginData.user.uid);
    localStorage.setItem("displayName", loginData.user.displayName);
    localStorage.setItem("email", loginData.user.email);
    localStorage.setItem("photoURL", loginData.user.photoURL);
    localStorage.setItem("newUser", loginData.additionalUserInfo.isNewUser);

    /** IF new user THEN redirect to verification ELSE redirect to index */
    if (loginData.additionalUserInfo.isNewUser) {
      this.router.navigate(["index"]);
    }
  }
}

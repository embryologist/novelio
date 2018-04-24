import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";
import { GoogleAuthProvider } from "@firebase/auth-types";

@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afStore: AngularFirestore
  ) {}

  login(mode = "google") {
    setTimeout(async () => {
      let provider;

      switch (mode) {
        case "google":
          provider = new GoogleAuthProvider();
          break;
        default:
          provider = new GoogleAuthProvider();
      }
      const login = await this.afAuth.auth.signInWithPopup(provider);
      this.afterLogin(login);
    }, 500);
  }

  async afterLogin(loginData) {
    /** First, store required data in localStorage */
    /* localStorage.setItem("uid", loginData.user.uid);
    localStorage.setItem("displayName", loginData.user.displayName);
    localStorage.setItem("email", );
    localStorage.setItem("photoURL", loginData.user.photoURL);
    localStorage.setItem("newUser", loginData.additionalUserInfo.isNewUser); */

    await this.afStore.doc(`users/${loginData.user.uid}`).set({
      uid: loginData.user.uid,
      displayName: loginData.user.displayName,
      email: loginData.user.email,
      photoURL: loginData.user.photoURL,
      isSetUp: false
    });

    /** IF new user THEN redirect to verification ELSE redirect to index */
    if (loginData.additionalUserInfo.isNewUser) {
      this.router.navigate(["sign", "username"]);
    } else {
      this.router.navigate(["home"]);
    }
  }
}

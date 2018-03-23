import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { AngularFireAuth, AUTH_PROVIDERS} from "angularfire2/auth";

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login(mode) {
    let provider;

    switch (mode) {
      case "google":
        provider = AUTH_PROVIDERS
    }
  }
}

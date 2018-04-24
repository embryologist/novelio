import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class FabService {
  /** The state for actions */
  fabState$ = new BehaviorSubject('usernameSelect');

  constructor(private afStore: AngularFirestore) {}

  async updateUsername(): Promise<void> {
    /** Todo(myself): Complete the username update logic */
    this.afStore.doc(``);
  }
}

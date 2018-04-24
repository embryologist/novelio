import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { FabService } from "../../fab.service";
import { MatInput } from "@angular/material";

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.scss"]
})
export class VerifyComponent implements AfterViewInit {
  @ViewChild('username')  username: MatInput;
  }

  constructor(private afStore: AngularFirestore, private fabService: FabService) { }

  get name() {
    return localStorage.getItem("displayName").split(" ")[0];
  }

 // console.log(this.fabC.disabled);

  checkIfUsernameExists($event) {
    const query = this.afStore.collection('users', ref => ref.where('username', '==', this.username)).valueChanges().subscribe(console.log);
  }
}

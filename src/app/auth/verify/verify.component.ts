<<<<<<< HEAD
import { AfterViewInit, Component } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";


=======
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { FabService } from "../../fab.service";
import { MatInput } from "@angular/material";
>>>>>>> bca17a2f94b979fc35527bf5781bdcbbe6559d2a

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.scss"]
})
export class VerifyComponent implements AfterViewInit {
  @ViewChild('username') get username(input: MatInput) {
    return input.value;
  }

  constructor(private afStore: AngularFirestore, private fabService: FabService) { }

  get name() {
    return localStorage.getItem("displayName").split(" ")[0];
  }

  ngAfterViewInit() {
    // console.log(this.fabC.disabled);
  }

  checkIfUsernameExists($event) {
    const query = this.afStore.collection('users', ref => ref.where('username', '==', this.username)).valueChanges().subscribe(console.log);
  }
}

import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

import { QuickActionsComponent } from "../../quick-actions/quick-actions.component";

import { MatButton } from "@angular/material";

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.scss"]
})
export class VerifyComponent implements AfterViewInit {
  // @ViewChild(QuickActionsComponent) fabC: QuickActionsComponent;
  // fab: MatButton = this.fabC.fab;

  constructor(private afStore: AngularFirestore) {}

  get name() {
    return localStorage.getItem("displayName").split(" ")[0];
  }

  ngAfterViewInit() {
    // console.log(this.fabC.disabled);
  }

  checkIfUsernameExists($event) {
    console.log($event);
  }
}

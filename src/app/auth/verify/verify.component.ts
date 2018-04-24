import { AfterViewInit, Component } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";



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

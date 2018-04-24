import { Component, OnInit, ViewChild } from "@angular/core";
import { MatButton } from "@angular/material";
import { NavigationEnd, Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";
import { fabScale } from "../animations";
import { FabService } from '../fab.service';


@Component({
  selector: "app-quick-actions",
  templateUrl: "./quick-actions.component.html",
  styleUrls: ["./quick-actions.component.scss"],
  animations: [fabScale]
})
export class QuickActionsComponent implements OnInit {
  /** Animation state */
  state: String = "tiny";

  /** Whether the fab is hidden or not */
  hidden: Boolean = false;

  /** What is the icon displayed on the fab */
  icon = "arrow_forward";

  /** Whether the icon is disabled */
  disabled: Boolean = false;

  /** Selects the fab */
  @ViewChild("fab") fab: MatButton;

  constructor(
    private router: Router,
    private fabService: FabService,
    private afStore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { }

  manageState() {
    this.fabService.fabState$.subscribe(async state => {
      switch (state.id) {
        case 'UsernameSelectEnterKey':
          // Get the uid of currently logged in user
          const uid = this.afAuth.auth.currentUser.uid;

          // Get the username from `fabService`
          const username = this.fabService.fabState$.subscribe(data => data.payload);
          try {
            await this.afStore.doc(`users/${uid}`).set({ username }, { merge: true });
            this.router.navigateByUrl(`https://pokeheroes.com/daycare`);
          } catch (error) {
            console.error(error);
          }
          break;
      }
    });
  }

  ngOnInit() {
    this.adaptiveView();
  }

  /**
   * Based on page URL, determines what action to do when clicked on
   * @returns Promise<void>
   */
  async selectProcess() {
    this.router.events.subscribe(val => {
      const url = val instanceof NavigationEnd && val.url;

      if (url === "/sign/username") {
        /** Username create action triggered */
      }
    });
  }

  async adaptiveView() {
    this.router.events.subscribe(val => {
      const url = val instanceof NavigationEnd && val.url;

      if (url === "/sign/in") {
        this.hidden = true;
        this.state = "tiny";
      } else if (url === "/sign/username") {
        this.hidden = false;
        this.state = "large";
        this.icon = "arrow_forward";
        this.disabled = true;
      } else {
        this.hidden = false;
        this.state = "large";
      }
    });
  }
}

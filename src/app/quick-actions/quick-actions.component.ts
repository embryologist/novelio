import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { fabScale } from "../animations";
import { MatButton } from "@angular/material";

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
  disabled: Boolean = true;

  /** Selects the fab */
  @ViewChild("fab") fab: MatButton;

  constructor(private router: Router) {}

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

import { Component, OnInit, Input } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { fabScale } from "../animations";

@Component({
  selector: "app-quick-actions",
  templateUrl: "./quick-actions.component.html",
  styleUrls: ["./quick-actions.component.scss"],
  animations: [fabScale]
})
export class QuickActionsComponent implements OnInit {
  @Input() mode: string;
  public state = "tiny";
  public hidden = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkMode();
  }

  async checkMode() {
    this.router.events.subscribe(val => {
      const url = val instanceof NavigationEnd && val.url;

      if (url === "/sign/in") {
        this.hidden = true;
        this.state = "tiny";
      } else if (url === "/sign/username") {
        this.hidden = false;
        this.state = "large";
      } else {
        this.hidden = false;
        this.state = "large";
      }
    });
  }
}

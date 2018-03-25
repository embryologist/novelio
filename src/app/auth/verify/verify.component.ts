import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.scss"]
})
export class VerifyComponent implements OnInit {
  constructor() {}

  get name() {
    return localStorage.getItem('displayName').split(' ')[0];
  }

  ngOnInit() {}
}

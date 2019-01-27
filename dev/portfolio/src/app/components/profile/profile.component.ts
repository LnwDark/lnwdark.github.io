import { Component, OnInit } from '@angular/core';

import { formatDate } from '@angular/common';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public fullName;
  today = new Date();
  jstoday = "";
  Year = "";
  constructor() {
    this.jstoday = formatDate(
      this.today,
      "dd-MM-yyyy hh:mm:ss a",
      "en-US",
      "+7"
    );
    
  }

  ngOnInit() {}

  dataGet = {
    fullname: "Surichai Proprakon",
    prosition: "Programmer",
    age: 26
  };
}

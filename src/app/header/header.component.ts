import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FilterService } from "../services/filter.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private filter: FilterService) {}
  listFilter: string;
  ngOnInit() {}
  onClick(): void {
    this.filter.changeMessage(this.listFilter);
  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}

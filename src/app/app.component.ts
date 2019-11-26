import {Component, OnInit} from '@angular/core';
import {SideBarService} from "./service/side-bar.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pedidos-bootcamp';
  displaySideBar =  false;

  constructor(private sideBarService: SideBarService){
    this.sideBarService.getMostrar$().subscribe(val => this.displaySideBar = val);
  }

  ngOnInit(): void {
    this.sideBarService.setMostrar(true);
  }


}

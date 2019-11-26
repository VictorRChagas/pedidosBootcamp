import {Injectable, OnDestroy} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class SideBarService implements OnDestroy {

  private topicoMostrarSideBar = new Subject<boolean>();

  constructor() {

  }

  setMostrar(mostrar: boolean): void{
    return this.topicoMostrarSideBar.next(mostrar);
  }

  getMostrar$(): Observable<boolean> {
    return this.topicoMostrarSideBar.asObservable();
  }

  ngOnDestroy(): void {
    this.topicoMostrarSideBar.unsubscribe();
  }
}

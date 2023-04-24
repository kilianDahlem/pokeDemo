import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  value: string = '';
  public stringVar = new Subject<string>(); 

  constructor() { }

  getObservable(): Subject<string> {
    return this.stringVar;
  }

  public setValue(newStringVal: string){
    this.stringVar.next(newStringVal);
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LanguageService {

  public language = new Subject<string>()

  constructor() { }

  setLanguage(value) {
    this.language.next(value)
  }
}

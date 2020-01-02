import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  userName: string = 'Huiru'

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  setLanguage(value) {
    this.language.setLanguage(value)
  }

}

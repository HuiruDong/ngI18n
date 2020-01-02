import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ngI18n';

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) { }

  async ngOnInit() {
    let language = await localStorage.getItem('language') || this.translate.getBrowserCultureLang()
    this.translate.setDefaultLang('zh-CN')
    this.translate.use(language)
    localStorage.setItem('language', language)
    this.languageService.language.subscribe(val => {
      this.translate.use(val)
      localStorage.setItem('language', val)
    })
  }
}

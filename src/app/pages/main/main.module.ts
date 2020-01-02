import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TranslateModule 
  ]
})
export class MainModule { }

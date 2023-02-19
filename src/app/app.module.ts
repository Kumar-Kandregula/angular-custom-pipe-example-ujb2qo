import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParenthesisPipe } from '../pipes/parenthesis.pipe';
import { ConvertSizePipe } from '../pipes/ConvertSize.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ParenthesisPipe, ConvertSizePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

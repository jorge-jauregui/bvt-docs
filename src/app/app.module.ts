import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CaesarCipherComponent } from './caesar-cipher/caesar-cipher.component';
import { CashRegisterComponent } from './cash-register/cash-register.component';
import { PalindromeCheckerComponent } from './palindrome-checker/palindrome-checker.component';
import { PhoneValidatorComponent } from './phone-validator/phone-validator.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CaesarCipherComponent,
    CashRegisterComponent,
    PalindromeCheckerComponent,
    PhoneValidatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

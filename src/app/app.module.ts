import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import th from '@angular/common/locales/th'
registerLocaleData(th)

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomeComponent } from './home/home.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { NavbarComponent } from './navbar/navbar.component'
import { AllBookingComponent } from './all-booking/all-booking.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NzTableModule } from 'ng-zorro-antd/table'
import {MatSelectModule} from '@angular/material/select';
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { th_TH } from 'ng-zorro-antd/i18n'
import { registerLocaleData } from '@angular/common'


@NgModule({
    declarations: [AppComponent, HomeComponent, SidebarComponent, NavbarComponent, AllBookingComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, NgbModule, FormsModule, NzTableModule, MatSelectModule],
    providers: [{ provide: NZ_I18N, useValue: th_TH }],
    bootstrap: [AppComponent],
})
export class AppModule {}

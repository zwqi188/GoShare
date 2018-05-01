import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { UtilComponent } from './util/util.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { ShareComponent } from './share/share.component';
import { AddShareComponent } from './add-share/add-share.component';
import { ManageComponent } from './manage/manage.component';
import { LayoutComponent } from './layout/layout.component';
import { ModalComponent } from './modal/modal.component';
import { ClickComponent } from './click/click.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    UtilComponent,
    LoginComponent,
    RegistComponent,
    ShareComponent,
    AddShareComponent,
    ManageComponent,
    LayoutComponent,
    ModalComponent,
    ClickComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

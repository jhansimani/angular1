import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggerService } from './dependency-providers/logger.service';
import { BetterLoggerService } from './dependency-providers/better-logger.service';
import { HeaderComponent } from './header/header.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NoEncapsulationComponent } from './no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation.component';
import { DynamicLoaderDirective } from './directives/dynamic-loader.directive';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component';
import { OutclickDirective } from './directives/outclick.directive';
import { ModalComponent } from './compoents/modal/modal.component';
import { RegisterComponent } from './forms/register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    ListHeaderComponent,
    ParentComponent,
    ChildComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    DynamicLoaderDirective,
    DynamicChildComponent,
    OutclickDirective,
    ModalComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LoggerService,
      useClass: BetterLoggerService,
    },
    {
      provide: BetterLoggerService,
      useExisting: LoggerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

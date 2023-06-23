import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { BranchModule } from './modules/branch/branch.module';
import { CoreModule } from './modules/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SpecializationModule } from './modules/specialization/specialization.module';
import { DoctorModule } from './modules/doctor/doctor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    BranchModule,
    CoreModule,
    HttpClientModule,
    SpecializationModule,
    DoctorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

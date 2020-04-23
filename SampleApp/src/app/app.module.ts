import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationModule } from 'sample-library';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LocationModule.forRoot({
      limit: environment.locationService.limit,
      email: environment.locationService.email,
      format: environment.locationService.format,
      showAddressDetails: environment.locationService.showAddressDetails,
      serviceUri: environment.locationService.serviceUri
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

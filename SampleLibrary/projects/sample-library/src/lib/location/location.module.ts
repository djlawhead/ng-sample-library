import { ModuleWithProviders, NgModule } from '@angular/core';
import { LocationConfig } from './location-config';
import { LocationService } from './location.service';
import { LOCATION_CONFIG } from './location-config.token';

@NgModule()
export class LocationModule {
  static forRoot(locationConfig: LocationConfig): ModuleWithProviders {
    return {
      ngModule: LocationModule,
      providers: [
        LocationService,
        {
          provide: LOCATION_CONFIG,
          useValue: locationConfig
        }
      ]
    };
  }
}

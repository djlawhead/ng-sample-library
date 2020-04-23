import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LocationService, LocationSearchResult } from 'sample-library';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'SampleApp';
  results = [];

  constructor(private location: LocationService) {
  }

  getWorkAddressDetails() {
    this.results = [ 'Hold on...' ];
    this.location.getAddressDetails('401 B Street, San Diego, CA 92101')
      .subscribe(x => {
        this.results = x.map(a => a.display_name);
      });
  }
}

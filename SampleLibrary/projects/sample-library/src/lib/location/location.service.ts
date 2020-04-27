import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOCATION_CONFIG } from './location-config.token';
import { LocationSearchResult } from './location-search-result';

@Injectable()
export class LocationService {

  constructor(@Inject(LOCATION_CONFIG) private config, private http: HttpClient) {
  }

  getAddressDetails(address: string): Observable<LocationSearchResult[]> {
    const addressDetailsEndpoint = new URL('/search', this.config.serviceUri).toString();
    const params = new HttpParams()
      .set('q', encodeURI(address))
      .append('email', this.config.email)
      .append('format', this.config.format)
      .append('limit', this.config.limit)
      .append('addressDetails', (this.config.showAddressDetails ? 1 : 0).toString());
    console.log(params.toString());
    return this.http.get<LocationSearchResult[]>(
      addressDetailsEndpoint + `?q=${encodeURI(address)}&format=json`,
      {
        responseType: 'json'
      }
    );
  }
}



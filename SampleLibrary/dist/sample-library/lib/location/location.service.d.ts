import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationSearchResult } from './location-search-result';
export declare class LocationService {
    private config;
    private http;
    constructor(config: any, http: HttpClient);
    getAddressDetails(address: string): Observable<LocationSearchResult>;
}

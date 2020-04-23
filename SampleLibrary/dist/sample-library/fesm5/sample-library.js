import { __decorate, __param } from 'tslib';
import { InjectionToken, Inject, Injectable, NgModule } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

var LocationSearchResult = /** @class */ (function () {
    function LocationSearchResult() {
    }
    return LocationSearchResult;
}());

var LOCATION_CONFIG = new InjectionToken('LOCATION_CONFIG');

var LocationService = /** @class */ (function () {
    function LocationService(config, http) {
        this.config = config;
        this.http = http;
    }
    LocationService.prototype.getAddressDetails = function (address) {
        var addressDetailsEndpoint = new URL('/search', this.config.serviceUri).toString();
        var params = new HttpParams()
            .set('q', encodeURI(address))
            .append('email', this.config.email)
            .append('format', this.config.format)
            .append('limit', this.config.limit)
            .append('addressDetails', (this.config.showAddressDetails ? 1 : 0).toString());
        console.log(params.toString());
        return this.http.get(addressDetailsEndpoint + ("?q=" + encodeURI(address) + "&format=json"), {
            responseType: 'json'
        });
    };
    LocationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LOCATION_CONFIG,] }] },
        { type: HttpClient }
    ]; };
    LocationService = __decorate([
        Injectable(),
        __param(0, Inject(LOCATION_CONFIG))
    ], LocationService);
    return LocationService;
}());

var LocationModule = /** @class */ (function () {
    function LocationModule() {
    }
    LocationModule_1 = LocationModule;
    LocationModule.forRoot = function (locationConfig) {
        return {
            ngModule: LocationModule_1,
            providers: [
                LocationService,
                {
                    provide: LOCATION_CONFIG,
                    useValue: locationConfig
                }
            ]
        };
    };
    var LocationModule_1;
    LocationModule = LocationModule_1 = __decorate([
        NgModule()
    ], LocationModule);
    return LocationModule;
}());

/*
 * Public API Surface of sample-lib
 */
// export other objects that you want to expose

/**
 * Generated bundle index. Do not edit.
 */

export { LocationModule, LocationSearchResult, LocationService, LOCATION_CONFIG as ɵa };
//# sourceMappingURL=sample-library.js.map

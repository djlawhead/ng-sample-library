import { __decorate, __param } from "tslib";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LOCATION_CONFIG } from './location-config.token';
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
export { LocationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NhbXBsZS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2xvY2F0aW9uL2xvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSTFEO0lBRUUseUJBQTZDLE1BQU0sRUFBVSxJQUFnQjtRQUFoQyxXQUFNLEdBQU4sTUFBTSxDQUFBO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUM3RSxDQUFDO0lBRUQsMkNBQWlCLEdBQWpCLFVBQWtCLE9BQWU7UUFDL0IsSUFBTSxzQkFBc0IsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyRixJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM1QixHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QixNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ2xDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDcEMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNsQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixzQkFBc0IsSUFBRyxRQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWMsQ0FBQSxFQUMvRDtZQUNFLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dEQWxCWSxNQUFNLFNBQUMsZUFBZTtnQkFBZ0MsVUFBVTs7SUFGbEUsZUFBZTtRQUQzQixVQUFVLEVBQUU7UUFHRSxXQUFBLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtPQUZ6QixlQUFlLENBcUIzQjtJQUFELHNCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FyQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExPQ0FUSU9OX0NPTkZJRyB9IGZyb20gJy4vbG9jYXRpb24tY29uZmlnLnRva2VuJztcbmltcG9ydCB7IExvY2F0aW9uU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi9sb2NhdGlvbi1zZWFyY2gtcmVzdWx0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBVElPTl9DT05GSUcpIHByaXZhdGUgY29uZmlnLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgfVxuXG4gIGdldEFkZHJlc3NEZXRhaWxzKGFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8TG9jYXRpb25TZWFyY2hSZXN1bHQ+IHtcbiAgICBjb25zdCBhZGRyZXNzRGV0YWlsc0VuZHBvaW50ID0gbmV3IFVSTCgnL3NlYXJjaCcsIHRoaXMuY29uZmlnLnNlcnZpY2VVcmkpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgncScsIGVuY29kZVVSSShhZGRyZXNzKSlcbiAgICAgIC5hcHBlbmQoJ2VtYWlsJywgdGhpcy5jb25maWcuZW1haWwpXG4gICAgICAuYXBwZW5kKCdmb3JtYXQnLCB0aGlzLmNvbmZpZy5mb3JtYXQpXG4gICAgICAuYXBwZW5kKCdsaW1pdCcsIHRoaXMuY29uZmlnLmxpbWl0KVxuICAgICAgLmFwcGVuZCgnYWRkcmVzc0RldGFpbHMnLCAodGhpcy5jb25maWcuc2hvd0FkZHJlc3NEZXRhaWxzID8gMSA6IDApLnRvU3RyaW5nKCkpO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcy50b1N0cmluZygpKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxMb2NhdGlvblNlYXJjaFJlc3VsdD4oXG4gICAgICBhZGRyZXNzRGV0YWlsc0VuZHBvaW50ICsgYD9xPSR7ZW5jb2RlVVJJKGFkZHJlc3MpfSZmb3JtYXQ9anNvbmAsXG4gICAgICB7XG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5cbiJdfQ==
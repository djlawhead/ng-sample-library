import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { LocationService } from './location.service';
import { LOCATION_CONFIG } from './location-config.token';
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
export { LocationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2FtcGxlLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvbG9jYXRpb24vbG9jYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzFEO0lBQUE7SUFhQSxDQUFDO3VCQWJZLGNBQWM7SUFDbEIsc0JBQU8sR0FBZCxVQUFlLGNBQThCO1FBQzNDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2Y7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFFBQVEsRUFBRSxjQUFjO2lCQUN6QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBWlUsY0FBYztRQUQxQixRQUFRLEVBQUU7T0FDRSxjQUFjLENBYTFCO0lBQUQscUJBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uQ29uZmlnIH0gZnJvbSAnLi9sb2NhdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9sb2NhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExPQ0FUSU9OX0NPTkZJRyB9IGZyb20gJy4vbG9jYXRpb24tY29uZmlnLnRva2VuJztcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGxvY2F0aW9uQ29uZmlnOiBMb2NhdGlvbkNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTG9jYXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTG9jYXRpb25TZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTE9DQVRJT05fQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBsb2NhdGlvbkNvbmZpZ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19
var LocationModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { LocationService } from './location.service';
import { LOCATION_CONFIG } from './location-config.token';
let LocationModule = LocationModule_1 = class LocationModule {
    static forRoot(locationConfig) {
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
    }
};
LocationModule = LocationModule_1 = __decorate([
    NgModule()
], LocationModule);
export { LocationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2FtcGxlLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvbG9jYXRpb24vbG9jYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUcxRCxJQUFhLGNBQWMsc0JBQTNCLE1BQWEsY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQThCO1FBQzNDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2Y7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFFBQVEsRUFBRSxjQUFjO2lCQUN6QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBYlksY0FBYztJQUQxQixRQUFRLEVBQUU7R0FDRSxjQUFjLENBYTFCO1NBYlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbkNvbmZpZyB9IGZyb20gJy4vbG9jYXRpb24tY29uZmlnJztcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gJy4vbG9jYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMT0NBVElPTl9DT05GSUcgfSBmcm9tICcuL2xvY2F0aW9uLWNvbmZpZy50b2tlbic7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChsb2NhdGlvbkNvbmZpZzogTG9jYXRpb25Db25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IExvY2F0aW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIExvY2F0aW9uU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IExPQ0FUSU9OX0NPTkZJRyxcbiAgICAgICAgICB1c2VWYWx1ZTogbG9jYXRpb25Db25maWdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
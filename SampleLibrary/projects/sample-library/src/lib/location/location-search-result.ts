import { BoundingBox } from './bounding-box';
import { Address } from './address';
export class LocationSearchResult {
  address: Address;
  boundingbox: BoundingBox;
  class: string;
  display_name: string;
  importance: number;
  lat: number;
  licence: string;
  lon: number;
  osm_id: number;
  osm_type: string;
  place_id: number;
  type: string;
}

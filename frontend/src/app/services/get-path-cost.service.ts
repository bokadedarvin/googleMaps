import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPathCostService {

  radiusOfEarth:number;

  constructor() {
    this.radiusOfEarth = 6371;
  }
  
  getDistanceFromLatLonInKm(from, to) {
    const { lat: lat1, long: lan1 } = from;
    const { lat: lat2, long: lan2 } = to;
    const dLat = this.deg2rad((lat2-lat1));
    const dLon = this.deg2rad((lan2-lan1));
    const distance = ((Math.sin(dLat/2) * Math.sin(dLat/2)) + (Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2))) * (Math.sin(dLon/2) * Math.sin(dLon/2))); 
    var atainedAngle = 2 * Math.atan2(Math.sqrt(distance), Math.sqrt(1-distance)); 
    return (this.radiusOfEarth * atainedAngle);
  }

  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

}
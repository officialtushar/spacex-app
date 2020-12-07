import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { }


  getAllPrograms() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100')
    .pipe(
      map((response) => {
        console.log("%c getting the response of all launch programs","color: yellow", response);
        return response;
      })
    );
  }

  getLaunchData() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true')
    .pipe(
      map((response) => {
        console.log("%c getting the response of all launch programs","color: yellow", response);
        return response;
      })
    );
  }

  getLaunchAndLandData() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true')
    .pipe(
      map((response) => {
        console.log("%c getting the response of all launch programs","color: yellow", response);
        return response;
      })
    );
  }

  getAllData() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014')
    .pipe(
      map((response) => {
        console.log("%c getting the response of all launch programs","color: yellow", response);
        return response;
      })
    );
  }


}

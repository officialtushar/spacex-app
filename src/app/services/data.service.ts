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
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=8')
    .pipe(
      map((response) => {
        console.log("%c getting the response of all launch programs","color: yellow", response);
        return response;
      })
    );
  }


  launchSuccess(value) {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=8&launch_success=${value}`)
    .pipe(
      map((response) => {
        console.log("%c getting the response of launch success","color: yellow", response);
        return response;
      })
    );
  }

  launchAndLand(launch,land) {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=8&launch_success=${launch}&land_success=${land}`)
    .pipe(
      map((response) => {
        console.log("%c getting the response of launch and land","color: yellow", response);
        return response;
      })
    );
  }

  allFilter(launch,land,year) {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`)
    .pipe(
      map((response) => {
        console.log("%c getting the response of all filter","color: yellow", response);
        return response;
      })
    );
  }


}

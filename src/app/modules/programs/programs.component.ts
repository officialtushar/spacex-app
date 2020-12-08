import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
// import $ from 'jquery';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  spacexPrograms: Object;

  constructor(
    private dataService: DataService
  ) { }

  filter = {
    launch: null,
    land: null,
    year: null
  }

  buttons = {
    year: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    launch: ['true', 'false'],
    landing: ['true', 'false']
  }
  ngOnInit() {
    this.getAllLaunchPrograms();
  }

  getAllLaunchPrograms() {
    this.dataService.getAllPrograms().subscribe((response) => {
      console.log('% response while getting the data of all programs', 'color: yellow', response);
      this.spacexPrograms = response;
    }, error => {
      console.log('% error while getting the data of all programs', 'color: yellow', error);
    });
  }




  filterData(type, data, event) {

    console.log('event', event.target.id);



    this.filter[type] = data.value;

    console.log('fitler', this.filter);

    if(this.filter.launch !== null ) {
      // this.launchSuccess();
      if(this.filter.land !== null) {


        if(this.filter.year !== null) {
          this.allFilter();
        } else {
          this.launchAndLand();
        }
      } else {
        this.launchSuccess();
      }


    }

  }

  launchSuccess() {
    this.dataService.launchSuccess(this.filter.launch).subscribe((response) => {
      console.log('% response while getting the data of all programs', 'color: yellow', response);
      this.spacexPrograms = response;
    }, error => {
      console.log('% error while getting the data of all programs', 'color: yellow', error);
    });
  }
  launchAndLand() {
    this.dataService.launchAndLand(this.filter.launch, this.filter.land).subscribe((response) => {
      console.log('% response while getting the data of all programs', 'color: yellow', response);
      this.spacexPrograms = response;
    }, error => {
      console.log('% error while getting the data of all programs', 'color: yellow', error);
    });
  }

  allFilter() {
    this.dataService.allFilter(this.filter.launch, this.filter.land, this.filter.year).subscribe((response) => {
      console.log('% response while getting the data of all programs', 'color: yellow', response);
      this.spacexPrograms = response;
    }, error => {
      console.log('% error while getting the data of all programs', 'color: yellow', error);
    });
  }


}

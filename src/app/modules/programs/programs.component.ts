import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getAllLaunchPrograms();
  }

  getAllLaunchPrograms() {
    this.dataService.getAllPrograms().subscribe((response) => {
      console.log('% response while getting the data of all programs','color: yellow', response);
    }, error => {
      console.log('% error while getting the data of all programs','color: yellow', error);
    })
  }

}

import { Component } from '@angular/core';

interface dropdown {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
  // agent values
  Agents: dropdown[] = [
    {value: 'Jhon-1', viewValue: 'Jhon'},
    {value: 'Stieve-2', viewValue: 'Stieve'},
    {value: 'Robert-3', viewValue: 'Robert'},
  ];

  // country values
  Countries: dropdown[] = [
    {value: 'London-1', viewValue: 'London'},
    {value: 'Paris-2', viewValue: 'Paris'},
    {value: 'Karachi-3', viewValue: 'Karachi'},
  ];
}

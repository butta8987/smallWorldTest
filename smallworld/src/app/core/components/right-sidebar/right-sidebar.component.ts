import { Component } from '@angular/core';

interface CardList{
  title: string;
  value: any;
}
@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent {

  // card listing values
  cardlist: CardList[] = [
    {title: 'Phase #1 results', value: 3},
    {title: 'Phase #2 results', value: 19},
    {title: 'Phase #3 results', value: 5}
  ];
}

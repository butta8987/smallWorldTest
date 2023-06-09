import { Component } from '@angular/core';

interface card {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  // cards data
  Cards: card[] = [
    {title: 'Header', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.', image: 'https://placehold.co/400x200'},
    {title: 'Header', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.', image: 'https://placehold.co/400x200'},
    {title: 'Header', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.', image: 'https://placehold.co/400x200'}
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menuItems = [
    {
      label: 'Login',
      active: true,
      icon: 'verified_user'
    },
    {
      label: 'Profle',
      active: false,
      icon: 'account_circle'
    },
    {
      label: 'Favorites',
      active: false,
      icon: 'favorite'
    },
  ]
}

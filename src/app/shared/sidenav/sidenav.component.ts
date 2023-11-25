import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared.module';
import { MenuItems } from '../menu-items/menu-items';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  constructor(public menuItems: MenuItems) {}
}

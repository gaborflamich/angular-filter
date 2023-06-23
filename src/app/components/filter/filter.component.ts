import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { items } from './filter.mock';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  items: string[] = items;
  filteredItems: string[] = [];

  constructor() {
    this.filteredItems = this.items; // Display all items by default
  }

  filterItems(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value || '';
    this.filteredItems = this.items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

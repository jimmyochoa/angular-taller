import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  standalone: true,
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() tableData: string[][] = [];
  @Input() tableHeaders: string[] = [];
}

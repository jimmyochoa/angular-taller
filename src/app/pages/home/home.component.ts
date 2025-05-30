import { Component } from '@angular/core';
import { ContactoComponent } from '../../shared/contacto/contacto.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ContactoComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = 'Album';

  tumbails: any[] = [
    { "text": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", "url": "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" }
  ];

  tableHeaders = ['Equipo', 'Posición', 'Puntos'];

  tableData: string[][] = [
    ['Real Madrid', '1', '82'],
    ['Barcelona', '2', '79'],
    ['Atlético Madrid', '3', '74'],
    ['Sevilla', '4', '68']
  ];
}

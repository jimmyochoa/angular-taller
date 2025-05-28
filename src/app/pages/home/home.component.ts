import { Component } from '@angular/core';
import { ContactoComponent } from '../../shared/contacto/contacto.component';

@Component({
  selector: 'app-home',
  imports: [ContactoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ticketData: any = {};
  submitted = false;

  submitForm() {
    this.submitted = true;
  }

  bookAnother() {
    this.submitted = false;
    this.ticketData = {};
  }
}
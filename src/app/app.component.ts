import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';
import { RandomNameService } from './services/random-name.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule,],
  providers: [RandomNameService,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'randmon-name-client';

  constructor(private randomNameService: RandomNameService) {
    this.update();
  }

  selectedCount: number = 50;
  names: string[] = [];

  onClick() {
    this.update();
  }

  update() {
    this.randomNameService
      .getList(this.selectedCount)
      .pipe(first())
      .subscribe(s => this.names = s);
  }
}

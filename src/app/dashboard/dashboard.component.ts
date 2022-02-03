import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardsLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Aziende nei diversi regimi', cols: 1, rows: 1 },
          { title: 'Funzioni', cols: 1, rows: 1 },
          { title: 'Ultime anagrafiche inserite', cols: 1, rows: 1 },
          { title: 'Diversificazione ateco', cols: 1, rows: 1 },
          { title: 'Card 5', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Aziende nei diversi regimi', cols: 2, rows: 1 },
        { title: 'Funzioni', cols: 1, rows: 1 },
        { title: 'Ultime anagrafiche inserite', cols: 1, rows: 2 },
        { title: 'Diversificazione ateco', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 2, rows: 1 }

      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

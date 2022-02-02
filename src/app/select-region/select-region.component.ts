import {Component} from '@angular/core';

@Component({
  selector: 'app-select-region',
  templateUrl: './select-region.component.html',
  styleUrls: ['./select-region.component.css']
})
export class SelectRegionComponent {
  states: string[] = [
    'Abruzzo',
    'Basilicata',
    'Calabria',
    'Campania',
    'Emilia-Romagna',
    'Friuli Venezia Giulia',
    'Lazio',
    'Liguria',
    'Lombardia',
    'Marche',
    'Molise',
    'Piemonte',
    'Puglia',
    'Sardegna',
    'Sicilia',
    'Toscana',
    'Trentino-Alto Adige',
    'Umbria',
    'Maine',
    'Valle d Aosta',
    'Veneto'
  ];
}

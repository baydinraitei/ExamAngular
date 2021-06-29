import { StatistiquesModel } from './../models/statistiques';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  statistiqueA : StatistiquesModel = { id: 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46', titre: 'Démographie en France', valeur: '60M', appreciation: 'SUCCESS' }
  statistiqueB : StatistiquesModel = { id: 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb47', titre: 'Démographie en Turquie', valeur: '40M', appreciation: 'FALSE' }

  tableauStat: StatistiquesModel[] = [
    { id: 'test', titre: 'Démographie en maldive', valeur: '50M', appreciation: 'SUCCES' },
    { id: 'test', titre: 'Démographie au panama', valeur: '50M', appreciation: 'SUCCES' },

];
  constructor() { }

  ngOnInit(): void {
  }

}

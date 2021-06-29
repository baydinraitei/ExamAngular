import { StatistiquesModel } from './../models/statistiques';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  statistiqueA : StatistiquesModel = { id: 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46', titre: 'Démographie en France', valeur: '60M', appréciation: 'SUCCESS' }
  statistiqueB : StatistiquesModel = { id: 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb47', titre: 'Démographie en Turquie', valeur: '40M', appréciation: 'FALSE' }
  constructor() { }

  ngOnInit(): void {
  }

}

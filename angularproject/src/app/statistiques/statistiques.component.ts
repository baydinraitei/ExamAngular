import { StatistiquesModel } from './../models/statistiques';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatistiquesService } from '../statistiques.service';
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

@Input() statistiqueWS: StatistiquesModel;
  constructor(public statistiqueService: StatistiquesService) { }
 
  ngOnInit(): void {
    this.statistiqueService.recupererStats().subscribe(
        (datas) => {
            console.log(datas);
            this.statistiqueWS = datas as StatistiquesModel;
        }
    );
}

supprimer(): void{
    this.statistiqueService.supprimerStats().subscribe(
        (datas) => {
            console.log(datas);
        }
    );
}
}
import { StatistiquesService } from './statistiques.service';
import { StatistiquesModel } from './models/statistiques';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject'; 
  
  tableauStats: StatistiquesModel[] = [
    new StatistiquesModel('Titre', 'Démographie en Angleterre', '100M', 'SUCCES'),
  ];
  
  constructor(public statistiqueService: StatistiquesService) {
  
  }
  ngOnInit(): void { 
        this.statistiqueService.recupererStats().subscribe(
        (datas: []) => {
            console.log(datas);
            for (const stat of datas) {
                this.tableauStats.push(new StatistiquesModel(stat['id'], stat['value'], stat['appreciation'], stat['titre']));
                console.log(this.tableauStats);
            }
        }
    );
  }
  
  
  supprimer(): void {
    this.statistiqueService.supprimerStats().subscribe(
        (datas) => {
            console.log(datas);
        }
    );
  }
}


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

  

@Input() statistiqueWS: StatistiquesModel;
  constructor(public statistiqueService: StatistiquesService) { }
  @Input() statistique: StatistiquesModel;
  ngOnInit(): void {
   
}

}
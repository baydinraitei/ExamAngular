import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {


//récupération grace à l'http
constructor(public http: HttpClient) { }
// fonction recupérer stat
  recupererStats(){
      return this.http.get('https://stats.naminilamy.fr/');
  }
// fonction supprimer stat
  supprimerStats(){
      return this.http.delete('https://stats.naminilamy.fr/');
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {



constructor(public http: HttpClient) { }

  recupererStats(){
      return this.http.get('https://stats.naminilamy.fr/');
  }

  supprimerStats(){
      return this.http.delete('https://stats.naminilamy.fr/');
  }
}
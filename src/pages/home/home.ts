import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irParaPagina1(pagina1) {
    
        this.navCtrl.push(pagina1);
        //this.alerta(pagina);
        //this.navCtrl.push(pagina, {codigo:"1", nome:"nome a ser passado"});
    
      }

}

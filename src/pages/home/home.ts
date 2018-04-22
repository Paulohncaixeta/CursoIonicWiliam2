import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pessoa } from '../../classes/pessoa';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public text: String

  constructor(public navCtrl: NavController,
  private alertCtrl: AlertController,
  public modalCtrl: ModalController
  ) {

    this.text = 'Wiliam'

  }



  irParaPagina1(pagina1) {
    
        this.navCtrl.push(pagina1);
        //this.alerta(pagina);
        //this.navCtrl.push(pagina, {codigo:"1", nome:"nome a ser passado"});
    
      }

  irParaPagina2() {
    let pessoa = new Pessoa();
    pessoa.codigo = 45;
    pessoa.nome = "Isso é uma pessoa"
    this.navCtrl.push("Pagina2Page", { pessoa: pessoa });
    this.alerta("teste");
  }

  irParaPagina3() {
    //console.log("chegou333");
    let modal = this.modalCtrl.create('Pagina3Page');
    modal.present();
    this.alerta("teste3")
  }

  alerta(mensagem) {
    let alert = this.alertCtrl.create({
      title: 'Teste',
      subTitle: mensagem,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}

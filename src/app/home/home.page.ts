import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  projeto: object[] = [
    { descricao: "tomar banho", local: "casa", hora_inicio: "19:10", hora_termino: "20:20", status : "em espera"},
    { descricao: "janatr", local: "casa", hora_inicio: "19:00", hora_termino: "19:10", status : "em espera"},
    { descricao: "estudar", local: "FATEC", hora_inicio: "13:10", hora_termino: "16:20", status : "em espera"},
    { descricao: "almocar", local: "casa", hora_inicio: "12:00", hora_termino: "12:30", status : "concluido"}
  ];

}

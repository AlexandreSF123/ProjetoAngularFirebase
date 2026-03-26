import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro, IProduto } from './acervo.interface';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: IProduto[] =
  [{
    nome: "Mochila",
    preço: "99,00 R$",
    criado: "Brasil"
  },
  {
    nome: "Notebook",
    preço: "3.500,00 R$",
    criado: "China"
  },
  {
    nome: "Teclado Mecânico",
    preço: "250,00 R$",
    criado: "Estados Unidos"
  },
  {
    nome: "Mouse Gamer",
    preço: "150,00 R$",
    criado: "China"
  },
  {
    nome: "Cadeira Gamer",
    preço: "1.200,00 R$",
    criado: "Brasil"
  },
  {
    nome: "Monitor 24''",
    preço: "900,00 R$",
    criado: "Coreia do Sul"
  },
  {
    nome: "Headset",
    preço: "300,00 R$",
    criado: "Japão"
  },
  {
    nome: "Smartphone",
    preço: "2.000,00 R$",
    criado: "China"
  },
  {
    nome: "Tablet",
    preço: "1.500,00 R$",
    criado: "Estados Unidos"
  },
  {
    nome: "Carregador Portátil",
    preço: "120,00 R$",
    criado: "China"
  },
  {
    nome: "Relógio Inteligente",
    preço: "800,00 R$",
    criado: "China"
  },
  {
    nome: "Caixa de Som Bluetooth",
    preço: "220,00 R$",
    criado: "Brasil"
  },
  {
    nome: "HD Externo",
    preço: "400,00 R$",
    criado: "Estados Unidos"
  },
  {
    nome: "Pen Drive 64GB",
    preço: "60,00 R$",
    criado: "China"
  },
  {
    nome: "Webcam",
    preço: "180,00 R$",
    criado: "Japão"
  },
  {
    nome: "Microfone",
    preço: "350,00 R$",
    criado: "Alemanha"
  },
  {
    nome: "Impressora",
    preço: "700,00 R$",
    criado: "Japão"
  },
  {
    nome: "Roteador Wi-Fi",
    preço: "280,00 R$",
    criado: "China"
  },
  {
    nome: "SSD 1TB",
    preço: "550,00 R$",
    criado: "Coreia do Sul"
  },
  {
    nome: "Controle Gamer",
    preço: "320,00 R$",
    criado: "Estados Unidos"
  }];

  livros: ILivro[] = 
    [{
    isbn: "123", 
    titulo: "Uma breve história do tempo",
    categoria: [
      {nome: "científico"},
    {nome: "romance"},
      {nome: "terror"}
    ] },

    {
    isbn: "124",
    titulo: "O Enigma das Estrelas",
    categoria: [
      { nome: "científico" },
      { nome: "romance" }
    ]
  },
  {
    isbn: "125",
    titulo: "Sombras do Infinito",
    categoria: [
      { nome: "terror" },
      { nome: "científico" }
    ]
  },
  {
    isbn: "126",
    titulo: "Amor em Órbita",
    categoria: [
      { nome: "romance" },
      { nome: "científico" }
    ]
  },
  {
    isbn: "127",
    titulo: "O Laboratório do Medo",
    categoria: [
      { nome: "terror" }
    ]
  },
  {
    isbn: "128",
    titulo: "Entre Átomos e Emoções",
    categoria: [
      { nome: "científico" },
      { nome: "romance" }
    ]
  },
  {
    isbn: "129",
    titulo: "A Noite dos Experimentos",
    categoria: [
      { nome: "terror" },
      { nome: "científico" }
    ]
  },
  {
    isbn: "130",
    titulo: "Corações em Colisão",
    categoria: [
      { nome: "romance" }
    ]
  },
  {
    isbn: "131",
    titulo: "O Código do Horror",
    categoria: [
      { nome: "terror" }
    ]
  },
  {
    isbn: "132",
    titulo: "Universos Paralelos do Amor",
    categoria: [
      { nome: "científico" },
      { nome: "romance" }
    ]
  },
  {
    isbn: "133",
    titulo: "Experimento 666",
    categoria: [
      { nome: "terror" }
    ]
  },
  {
    isbn: "134",
    titulo: "A Física do Coração",
    categoria: [
      { nome: "científico" },
      { nome: "romance" }
    ]
  },
  {
    isbn: "135",
    titulo: "Pesadelos Quânticos",
    categoria: [
      { nome: "terror" },
      { nome: "científico" }
    ]
  },
  {
    isbn: "136",
    titulo: "A Última Equação do Amor",
    categoria: [
      { nome: "romance" }
    ]
  },
  {
    isbn: "137",
    titulo: "O Cientista das Sombras",
    categoria: [
      { nome: "terror" },
      { nome: "científico" }
    ]
  },
  {
    isbn: "138",
    titulo: "Ecos do Universo",
    categoria: [
      { nome: "científico" }
    ]
  },
  {
    isbn: "139",
    titulo: "Amor Além do Tempo",
    categoria: [
      { nome: "romance" },
      { nome: "científico" }
    ]
  },
  {
    isbn: "140",
    titulo: "A Casa dos Experimentos",
    categoria: [
      { nome: "terror" }
    ]
  },
  {
    isbn: "141",
    titulo: "Segredos do Cosmos Sombrio",
    categoria: [
      { nome: "científico" },
      { nome: "terror" }
    ]
  },
  {
    isbn: "142",
    titulo: "Entre o Medo e o Amor",
    categoria: [
      { nome: "romance" },
      { nome: "terror" }
    ]
  }
    ]
  
  

}


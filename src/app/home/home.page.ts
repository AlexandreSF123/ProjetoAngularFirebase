import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Livro } from './livro.interface';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 livros: Livro[] = [
  {
    isbn: '124',
    titulo: 'A Jornada de Pikachu',
    sinopse: 'Pikachu embarca em uma aventura para encontrar sua verdadeira força enquanto ajuda seus amigos pelo caminho.',
    data_lancamento: '10/07/2001',
    paginas: '120',
    autor: [
      { nome: 'Akira Tanaka', email: 'akira.tanaka@email.com' }
    ],
    categoria: [
      { nome: 'Aventura' }
    ],
    editora: [
      { nome: 'Tokyo Books', email: 'contato@tokyobooks.com' }
    ]
  },
  {
    isbn: '125',
    titulo: 'Charizard: Fogo Interior',
    sinopse: 'Uma história sobre superação e controle emocional através das batalhas de Charizard.',
    data_lancamento: '22/03/2005',
    paginas: '98',
    autor: [
      { nome: 'Kenji Sato', email: 'kenji@email.com' }
    ],
    categoria: [
      { nome: 'Drama' }
    ],
    editora: [
      { nome: 'Flame Press', email: 'flame@press.com' }
    ]
  },
  {
    isbn: '126',
    titulo: 'Bulbasaur e o Jardim Secreto',
    sinopse: 'Bulbasaur descobre um jardim mágico cheio de mistérios e criaturas raras.',
    data_lancamento: '14/09/2003',
    paginas: '76',
    autor: [
      { nome: 'Mika Yamamoto', email: 'mika@email.com' }
    ],
    categoria: [
      { nome: 'Fantasia' }
    ],
    editora: [
      { nome: 'Green Leaf', email: 'green@leaf.com' }
    ]
  },
  {
    isbn: '127',
    titulo: 'Squirtle Squad',
    sinopse: 'As aventuras da equipe Squirtle enfrentando desafios e protegendo sua cidade.',
    data_lancamento: '05/01/2000',
    paginas: '88',
    autor: [
      { nome: 'Hiroshi Kato', email: 'hiroshi@email.com' }
    ],
    categoria: [
      { nome: 'Ação' }
    ],
    editora: [
      { nome: 'Blue Wave', email: 'blue@wave.com' }
    ]
  },
  {
    isbn: '128',
    titulo: 'Eevee: Possibilidades Infinitas',
    sinopse: 'Eevee descobre seus múltiplos caminhos e as escolhas que definem seu futuro.',
    data_lancamento: '19/11/2008',
    paginas: '110',
    autor: [
      { nome: 'Naomi Suzuki', email: 'naomi@email.com' }
    ],
    categoria: [
      { nome: 'Ficção' }
    ],
    editora: [
      { nome: 'Evolution Books', email: 'evo@books.com' }
    ]
  },
  {
    isbn: '129',
    titulo: 'Gengar nas Sombras',
    sinopse: 'Mistérios e sustos acompanham Gengar em uma cidade cheia de segredos.',
    data_lancamento: '31/10/2006',
    paginas: '95',
    autor: [
      { nome: 'Ryu Takeda', email: 'ryu@email.com' }
    ],
    categoria: [
      { nome: 'Terror' }
    ],
    editora: [
      { nome: 'Dark Moon', email: 'dark@moon.com' }
    ]
  },
  {
    isbn: '130',
    titulo: 'Snorlax e o Dia Perfeito',
    sinopse: 'Uma narrativa leve e divertida sobre o dia ideal de Snorlax.',
    data_lancamento: '08/08/2002',
    paginas: '60',
    autor: [
      { nome: 'Taro Yamada', email: 'taro@email.com' }
    ],
    categoria: [
      { nome: 'Comédia' }
    ],
    editora: [
      { nome: 'Lazy House', email: 'lazy@house.com' }
    ]
  },
  {
    isbn: '131',
    titulo: 'Lucario: Aura e Destino',
    sinopse: 'Lucario aprende a dominar sua aura enquanto enfrenta grandes desafios.',
    data_lancamento: '17/04/2010',
    paginas: '140',
    autor: [
      { nome: 'Daichi Morita', email: 'daichi@email.com' }
    ],
    categoria: [
      { nome: 'Aventura' }
    ],
    editora: [
      { nome: 'Aura Press', email: 'aura@press.com' }
    ]
  },
  {
    isbn: '132',
    titulo: 'Jigglypuff: Canções e Confusões',
    sinopse: 'As apresentações musicais de Jigglypuff sempre terminam de forma inesperada.',
    data_lancamento: '12/06/2004',
    paginas: '70',
    autor: [
      { nome: 'Emi Kobayashi', email: 'emi@email.com' }
    ],
    categoria: [
      { nome: 'Comédia' }
    ],
    editora: [
      { nome: 'Melody Books', email: 'melody@books.com' }
    ]
  },
  {
    isbn: '133',
    titulo: 'Dragonite: O Guardião dos Céus',
    sinopse: 'Dragonite protege os mares e céus enquanto enfrenta ameaças perigosas.',
    data_lancamento: '25/12/2012',
    paginas: '150',
    autor: [
      { nome: 'Kazuo Ishida', email: 'kazuo@email.com' }
    ],
    categoria: [
      { nome: 'Ação' }
    ],
    editora: [
      { nome: 'Sky Legends', email: 'sky@legends.com' }
    ]
  }
];

}

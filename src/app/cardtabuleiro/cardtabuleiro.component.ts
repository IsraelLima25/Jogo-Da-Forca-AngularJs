import { Component, OnInit, OnChanges } from '@angular/core';
import { Palavra } from '../shared/palavra'

@Component({
  selector: 'app-cardtabuleiro',
  templateUrl: './cardtabuleiro.component.html',
  styleUrls: ['./cardtabuleiro.component.css']
})
export class CardtabuleiroComponent implements OnInit {
  public palavra: string
  public listaDeLetras: string[] = new Array
  public listaDeJogadasAcertadas: string[] = new Array
  public listaDeJogadasErradas: string[] = new Array
  public letraJogada: string

  //mock palavras do jogo
  public palavras: Palavra[] = [
    new Palavra('gato'),
    new Palavra('agenda'),
    new Palavra('caneta')
  ]

  constructor() {
    this.palavra = this.palavras[1].caracteres
    console.log(this.montarListaDeLetrasDaPalavra())
  }

  montarListaDeLetrasDaPalavra(): string[] {

    for (let index = 0; index < this.palavra.length; index++) {
      this.listaDeLetras[index] = this.palavra.charAt(index)
      this.listaDeJogadasAcertadas[index] = '?'
    }
    console.log('Quantidade de index lista de palavras jogadas ' + this.listaDeJogadasAcertadas.length)
    console.log('Quantidade de index lista das palavras da letra ' + this.listaDeLetras.length)
    console.log('Lista de Letras ' + this.listaDeLetras)
    console.log('Lista de Jogadas ' + this.listaDeJogadasAcertadas)


    return this.listaDeLetras
  }

  verificarLetra(): void {
    //alert("A letra digitada pelo usuario é " + this.letraJogada)

    for (var index = 0; index < this.listaDeLetras.length; index++) {

      if (this.listaDeLetras[index] === this.letraJogada) {
        this.listaDeJogadasAcertadas[index] = this.letraJogada
      } else {
        this.listaDeJogadasErradas[index] = this.letraJogada
      }
    }
  }

  atualizaLetra(evento: Event): void {
    this.letraJogada = (<HTMLInputElement>evento.target).value
    console.log(this.letraJogada)
    console.log('Letras Erradas ' + this.listaDeJogadasErradas)
  }

  ngOnInit() {

  }

}

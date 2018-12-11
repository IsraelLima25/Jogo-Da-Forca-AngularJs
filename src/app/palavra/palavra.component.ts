import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-palavra',
  templateUrl: './palavra.component.html',
  styleUrls: ['./palavra.component.css']
})
export class PalavraComponent implements OnInit, OnChanges {

  public lista: string[] = new Array
  @Input() public palavra: string
  constructor() {    
  }
  ngOnInit() {
  }

  montarLista(): string[] {
    for (let index = 0; index < this.palavra.length; index++) {
      this.lista[index] = this.palavra.charAt(index)
    }
    return this.lista
  }

  ngOnChanges() {
    //console.log(this.montarLista())
  }

  montarQuantidadeDeLetras(): void {

  }

}

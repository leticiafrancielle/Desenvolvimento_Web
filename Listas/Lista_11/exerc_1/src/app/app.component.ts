import { Component } from '@angular/core';
import Produto from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public produtos: Produto[] = new Array<Produto>();

  constructor() {
    this.produtos.push(new Produto("bolo de murangu","hummm, bolinho",
                                  "https://img.elo7.com.br/product/original/30B68A0/bolo-de-morango-bolo-suspiro-de-morango.jpg",
                                  100));

    this.produtos.push(new Produto("bolo de fubá","bolinho de milho",
                                  "https://www.sabornamesa.com.br/media/k2/items/cache/1b6069f7031f5df88e14909413a02435_XL.jpg",
                                  50));

    this.produtos.push(new Produto("suco de laranja", "puro suco da laranja",
                                   "https://padarialider.loji.com.br/storage/uploads/XvG9mfmDbukWCd4rcEM6iSgjJFRvBDbC4cnybRFx.webp",
                                   10))

    this.produtos.push(new Produto("sorvete", "sorvetinho geladinho", "https://foodbase.com.br/storage/app/media/receitas/2021/01/sorvete-de-flocos-co-d.jpg",
    15))
  }


  public detalhes(): void {
    alert('erro')

  }
}


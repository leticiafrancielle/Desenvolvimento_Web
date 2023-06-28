import { Component } from '@angular/core';
import Produto from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public comprar(){
    alert('Ir para a página de compras');
  }

  public mensagem: string = "Aquarius_Coffee"

  public produtos: Produto[] = new Array<Produto>();

  constructor() {
    this.produtos.push(new Produto("bolo de murangu","hummm, bolinho",
                                  "https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/b1/ac/b5/b1acb5e4-9845-0e4b-e9ed-22a53aa5eec3/source/256x256bb.jpg",
                                  100));

    this.produtos.push(new Produto("Café","Café torrado",
                                  "https://pbs.twimg.com/profile_images/637011771497291776/HBwfD5ot_400x400.jpg",
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


import { colors } from "../util/Colors";
import { Jogo } from "./Jogo";
// Classe que representa um tipo específico de Jogo: Jogo Fisico
// Extende a classe Jogo e adiciona as propriedades: Peso(g) e Midia

export class JogoFisico extends Jogo {
  private _peso: number;
  private _midia: number;

  // construtor que inicia as propriedades de um jogo fisico
  constructor(
    id_jogo: number,
    titulo_jogo: string,
    genero_jogo: number,
    preco_jogo: number,
    desenvolvedor_jogo: string,
    multiplayer: number,
    peso: number,
    midia: number
  ) {
    super(
      id_jogo,
      titulo_jogo,
      genero_jogo,
      preco_jogo,
      desenvolvedor_jogo,
      multiplayer
    );
    this._peso = peso;
    this._midia = midia;
  }

  public visualizar() {
    try {
      const midias = ["DVD", "CD", "BluRay"];
      var midia: string = "";

      // de acordo com a opção inserida pelo usuário no menu, a exibição do Visualizar() vai se basear nos textos
      switch (this._midia) {
        case 1:
          midia = "DVD";
          break;
        case 2:
          midia = "CD";
          break;
        case 3:
          midia = "BluRay";
          break;
        default:
          console.log("Midia não existe");
      }

      super.visualizar();
      console.log(colors.fg.green + "Peso: " + this._peso + "g");
      console.log(colors.fg.green + "Tipo de Midia: " + midia);
      console.log(colors.fg.green + "Forma: Fisica " + colors.reset);
    } catch (error) {
      console.log("Erro ao imprimir informação de Jogo Fisico: ", error);
    }
  }
}

import { colors } from "../util/Colors";
import { Jogo } from "./Jogo";

export class JogoFisico extends Jogo {
  private _peso: Number;
  private _midia: number;

  constructor(
    id_jogo: number,
    titulo_jogo: string,
    genero_jogo: string,
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
      const midias  = ["DVD", "CD", "BluRay"];
      var midia: string = "";

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
      console.log(colors.fg.red + "Peso: " + this._peso);
      console.log(colors.fg.red + "Tipo de Midia" + midia + colors.reset);
    } catch (error) {
      console.log("Erro ao imprimir informação de Jogo Fisico: ", error);
    }
  }
}

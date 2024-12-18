import { colors } from "../util/Colors";
import { Jogo } from "./Jogo";

export class JogoDigital extends Jogo {
  private _tamanhoGB: number;
  private _plataforma: number;

  constructor(
    id_jogo: number,
    titulo_jogo: string,
    genero_jogo: number,
    preco_jogo: number,
    desenvolvedor_jogo: string,
    multiplayer: number,
    tamanhoGB: number,
    plataforma: number
  ) {
    super(
      id_jogo,
      titulo_jogo,
      genero_jogo,
      preco_jogo,
      desenvolvedor_jogo,
      multiplayer
    );
    this._tamanhoGB = tamanhoGB;
    this._plataforma = plataforma;
  }

  public visualizar() {
    try {
      const plataformas = ["XBOX", "PlayStation", "PC"];
      var plataforma: string = "";

      switch (this._plataforma) {
        case 1:
          plataforma = "XBOX";
          break;
        case 2:
          plataforma = "PlayStation";
          break;
        case 3:
          plataforma = "PC";
          break;
        default:
          console.log("Plataforma não existe");
      }

      super.visualizar();
      console.log(colors.fg.green + "Tamanho em GB: " + this._tamanhoGB + "GB");
      console.log(colors.fg.green + "Plataforma: " + plataforma);
      console.log(colors.fg.green + "Forma: Digital " + colors.reset);
    } catch (error) {
      console.log("Erro ao imprimir informação de Jogo Digital: ", error);
    }
  }
}

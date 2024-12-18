import { colors } from "../util/Colors";
import { formatToBRL } from "../util/FuncoesRepetidas";

// Classe super que serve como base para herança das outras classes
export abstract class Jogo {
  private _id_jogo: number;
  private _titulo_jogo: string;
  private _genero_jogo: number;
  private _preco_jogo: number;
  private _desenvolvedor_jogo: string;
  private _multiplayer: number;

  // metodo construtor com os atributos base de um jogo
  constructor(
    id_jogo: number,
    titulo_jogo: string,
    genero_jogo: number,
    preco_jogo: number,
    desenvolvedor_jogo: string,
    multiplayer: number
  ) {
    this._id_jogo = id_jogo;
    this._titulo_jogo = titulo_jogo;
    this._genero_jogo = genero_jogo;
    this._preco_jogo = preco_jogo;
    this._desenvolvedor_jogo = desenvolvedor_jogo;
    this._multiplayer = multiplayer;
  }

  public get id_jogo(): number {
    return this._id_jogo;
  }

  public get titulo_jogo(): string {
    return this._titulo_jogo;
  }

  public get genero_jogo(): number {
    return this._genero_jogo;
  }

  public get preco_jogo(): number {
    return this._preco_jogo;
  }

  public set id_jogo(value: number) {
    this._id_jogo = value;
  }

  public set titulo_jogo(value: string) {
    this._titulo_jogo = value;
  }

  public set genero_jogo(value: number) {
    this._genero_jogo = value;
  }

  public set preco_jogo(value: number) {
    this._preco_jogo = value;
  }

  public get desenvolvedor_jogo(): string {
    return this._desenvolvedor_jogo;
  }

  public set desenvolvedor_jogo(value: string) {
    this._desenvolvedor_jogo = value;
  }

  public get multiplayer(): number {
    return this._multiplayer;
  }

  public set multiplayer(value: number) {
    this._multiplayer = value;
  }

  public visualizar(): void {
    // Ambos switch's mudam a exibição de multiplayer e Genero
    // Ambos são inseridos pelo usuario como numeros
    // Aqui são tratados e definidos como texto para serem exibidos

    const multiplayer = ["Não", "Sim"];
    const generos = ["RPG", "Corrida", "Esporte", "Ação", "Aventura"];

    var ehMultiplayer: string = "";
    var qualGenero: string = "";

    switch (this._genero_jogo) {
      case 1:
        qualGenero = "RPG";
        break;
      case 2:
        qualGenero = "Corrida";
        break;
      case 3:
        qualGenero = "Esporte";
        break;
      case 4:
        qualGenero = "Ação";
        break;
      case 5:
        qualGenero = "Aventura";
        break;
    }

    switch (this._multiplayer) {
      case 1:
        ehMultiplayer = "Não";
        break;
      case 2:
        ehMultiplayer = "Sim";
        break;
    }
    try {
      console.log(colors.fg.greenstrong + "\n\n===========================");
      console.log("Propriedades do Jogo");
      console.log("===========================" + colors.reset);
      console.log(colors.fg.green + "ID do Jogo: " + this._id_jogo);
      console.log("Titulo : " + this._titulo_jogo);
      console.log("Genero: " + qualGenero);
      console.log("Preço: " + formatToBRL(this._preco_jogo));
      console.log("Desenvoldedor: " + this._desenvolvedor_jogo);
      console.log("Multiplayer: " + ehMultiplayer) + colors.reset;
    } catch (error) {
      console.log("Erro ao imprimir informações do Jogo: ", error);
    }
  }
}

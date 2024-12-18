import { Jogo } from "../model/Jogo";
import { JogoRepository } from "../repository/JogoRepository";

export class JogoController implements JogoRepository {
  private listaJogos = new Array<Jogo>();

  public id_jogo: number = 0;

  listarTodosJogos(): void {
    this.listaJogos.forEach((jogo) => {
      jogo.visualizar();
    });
  }
  listarJogoPeloId(id_jogo: number): void {
    const buscaJogo = this.buscaJogo(id_jogo);

    if (buscaJogo !== null) buscaJogo.visualizar();
    else console.log("Jogo não encontrado!");
  }

  public buscaJogo(id_jogo: number): Jogo | null {
    if (this.listaJogos.length === 0) {
      console.log("Não existe nenhum jogo cadastrado!");
      return null;
    } else {
      for (let jogo of this.listaJogos) {
        if (jogo.id_jogo === id_jogo) return jogo;
      }
      return null;
    }
  }

  cadastrarJogo(jogo: Jogo): void {
    try {
      this.listaJogos.push(jogo);
      console.log(`Jogo ${jogo.titulo_jogo} foi cadastrado com sucesso`);
    } catch (error) {
      console.error("Erro ao cadastrar o jogo:", error);
    }
  }
  atualizarJogo(jogo: Jogo): void {
    const buscaJogo = this.buscaJogo(jogo.id_jogo);
    if (buscaJogo !== null) {
      this.listaJogos[this.listaJogos.indexOf(buscaJogo)] = jogo;
      console.log("O jogo foi atualizado com sucesso!");
    } else console.log("O jogo não foi encontrado");
  }
  deletarJogo(id_jogo: number): void {
    const buscaJogo = this.buscaJogo(id_jogo);
    if (buscaJogo !== null) {
      this.listaJogos.splice(this.listaJogos.indexOf(buscaJogo), 1);
      console.log("O jogo foi deletado com sucesso!");
    } else console.log("Jogo não encontrado");
  }

  public gerarID(): number {
    return ++this.id_jogo;
  }
}

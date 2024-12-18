import { Jogo } from "../model/Jogo";
import { JogoRepository } from "../repository/JogoRepository";

// Classe responsável por gerenciar os Jogos no sistema, implementando a interface JogoRepository

export class JogoController implements JogoRepository {
  private listaJogos = new Array<Jogo>();

  public id_jogo: number = 0;

  // Metodo para listar todos os jogos
  listarTodosJogos(): void {
    try {
      if (this.listaJogos.length === 0) {
        console.log("Não existe nenhum jogo cadastrado!");
      } else {
        this.listaJogos.forEach((jogo) => {
          jogo.visualizar();
        });
      }
    } catch (error) {
      console.error("Erro ao listar Jogos:", error);
    }
  }
  // Metodo para listar um unico jogo por ID
  listarJogoPeloId(id_jogo: number): void {
    const buscaJogo = this.buscaJogo(id_jogo);

    if (buscaJogo !== null) buscaJogo.visualizar();
    else console.log("O ID inserido não corresponde nenhum jogo adicionado");
  }

  // Metodo que auxilia na busca de um jogo por ID
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
  // Método para criar um novo jogo
  cadastrarJogo(jogo: Jogo): void {
    try {
      this.listaJogos.push(jogo);
      console.log(`Jogo ${jogo.titulo_jogo} foi cadastrado com sucesso`);
    } catch (error) {
      console.error("Erro ao cadastrar o jogo:", error);
    }
  }
  // Metodo para atualizar jogos existentes
  atualizarJogo(jogo: Jogo): void {
    try {
      const buscaJogo = this.buscaJogo(jogo.id_jogo);
      if (buscaJogo !== null) {
        this.listaJogos[this.listaJogos.indexOf(buscaJogo)] = jogo;
        console.log("O jogo foi atualizado com sucesso!");
      } else console.log("O jogo não foi encontrado");
    } catch (error) {
      console.error("Erro ao atualizar o jogo:", error);
    }
  }
  // Método para deletar um jogo pelo ID
  deletarJogo(id_jogo: number): void {
    try {
      const buscaJogo = this.buscaJogo(id_jogo);
      if (buscaJogo !== null) {
        this.listaJogos.splice(this.listaJogos.indexOf(buscaJogo), 1);
        console.log("O jogo foi deletado com sucesso!");
      } else console.log("Jogo não encontrado");
    } catch (error) {
      console.error("Erro ao deletar o jogo:", error);
    }
  }
  // Método para gerar um ID único para cada jogo

  public gerarID(): number {
    return ++this.id_jogo;
  }
}

import { colors } from "./Colors";
import readlinesync = require("readline-sync");

// Função para mostrar o sobre projeto e desenvolvedor
export function sobre(): void {
  console.log("\n╔═════════════════════════════════════════════════════════╗");
  console.log("   Projeto Desenvolvido por: ");
  console.log("   Samuel Francisco - samuelf@genstudents.org");
  console.log("   https://github.com/Samuel-1210/projeto_final_bloco_01");
  console.log("╚═════════════════════════════════════════════════════════╝");
}

// Função que pausa o programa até que o usuário pressione "Enter"

export function keyPress(): void {
  console.log(colors.reset, "");
  console.log(
    colors.fg.greenstrong,
    "\nPressione enter para continuar...",
    colors.reset
  );
  readlinesync.prompt();
}
// Função para formatar valores numéricos no padrão de moeda brasileira (BRL)

export function formatToBRL(value: number): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }
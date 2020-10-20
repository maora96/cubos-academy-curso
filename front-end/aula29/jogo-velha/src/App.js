import React, { useEffect } from "react";
import "./App.css";

function verificarQuemGanhou(tabuleiro) {
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] !== "" &&
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][0] === tabuleiro[i][2]
    ) {
      return tabuleiro[i][0];
    }

    if (
      tabuleiro[0][i] !== "" &&
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[0][i] === tabuleiro[2][i]
    ) {
      return tabuleiro[0][i];
    }
  }

  if (
    tabuleiro[0][0] !== "" &&
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[0][0] === tabuleiro[2][2]
  ) {
    return tabuleiro[0][0];
  }

  if (
    tabuleiro[0][2] !== "" &&
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[0][2] === tabuleiro[2][0]
  ) {
    return tabuleiro[0][2];
  }

  return null;
}

function App() {
  const [tabuleiro, mudarTabuleiro] = React.useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [jogadorAtual, mudarJogadorAtual] = React.useState("o");

  React.useEffect(() => {
    const ganhador = verificarQuemGanhou(tabuleiro);
    if (ganhador) {
      alert(`${ganhador} ganhou`);
      mudarTabuleiro([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    }
  }, [tabuleiro]);

  return (
    <div className="App">
      <h1>Jogo da Velha</h1>
      <table>
        {tabuleiro.map((linha, indiceLinha) => (
          <tr>
            {linha.map((casa, indiceColuna) => (
              <td
                onClick={() => {
                  if (tabuleiro[indiceLinha][indiceColuna] !== "") {
                    return;
                  }
                  const novoTabuleiro = [...tabuleiro];
                  tabuleiro[indiceLinha][indiceColuna] = jogadorAtual;
                  mudarTabuleiro(novoTabuleiro);
                  mudarJogadorAtual(jogadorAtual === "x" ? "o" : "x");
                }}
              >
                {casa}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;

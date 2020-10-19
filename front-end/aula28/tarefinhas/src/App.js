import React from "react";
import "./App.css";

function BotaoDeFiltro(props) {
  const { filtroAtivo, onClick, valor, children } = props;

  return (
    <button
      className={filtroAtivo === valor ? "ativo" : ""}
      onClick={() => onClick(valor)}
    >
      {children}
    </button>
  );
}

function App() {
  const [texto, mudarTexto] = React.useState("");
  const [tarefas, mudarTarefas] = React.useState([]);
  const [filtro, mudarFiltro] = React.useState("todos");

  const tarefasFeitas = tarefas.filter((t) => t.completada);

  const tarefasFiltradas = tarefas.filter((t) =>
    filtro === "feitas"
      ? t.completada
      : filtro === "a-fazer"
      ? !t.completada
      : true
  );

  const tarefasNaoFeitas = tarefas.filter((t) => !t.completada);

  const qtdAFazer = tarefasNaoFeitas.length;

  return (
    <div className="App">
      <h1>Tarefinhas 2.0</h1>
      <div className="card">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            //adicionar uma nova tarefa
            mudarTarefas(tarefas.concat({ nome: texto, completada: false }));
            mudarTexto("");
          }}
        >
          <input
            id="checkbox-todos"
            type="checkbox"
            checked={tarefasFeitas.length > 0 && tarefasNaoFeitas.length === 0}
          />
          <input
            id="input-tarefa"
            placeholder="O que precisa ser feito?"
            value={texto}
            onInput={(event) => {
              const input = event.target;
              mudarTexto(input.value);
            }}
          />
        </form>

        <ul className="tarefas">
          {tarefasFiltradas.map((tarefa) => (
            <li className={tarefa.completada ? "completada" : ""}>
              <input
                type="checkbox"
                checked={tarefa.completada || false}
                onInput={() => {
                  mudarTarefas(
                    tarefas.map((t) => {
                      if (tarefa === t) {
                        t.completada = !t.completada;
                      }
                      return t;
                    })
                  );
                }}
              />
              <span>{tarefa.nome}</span>
              <button
                onClick={() => {
                  mudarTarefas(tarefas.filter((t) => tarefa !== t));
                }}
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>

        <div className="rodape">
          <div>
            {qtdAFazer} {qtdAFazer === 1 ? "item" : "itens"} a fazer
          </div>

          <div className="filtros">
            <BotaoDeFiltro
              filtroAtivo={filtro}
              valor="todos"
              onClick={(valor) => mudarFiltro(valor)}
            >
              Todas
            </BotaoDeFiltro>
            <BotaoDeFiltro
              filtroAtivo={filtro}
              valor="a-fazer"
              onClick={(valor) => mudarFiltro(valor)}
            >
              A Fazer
            </BotaoDeFiltro>
            <BotaoDeFiltro
              filtroAtivo={filtro}
              valor="feitas"
              onClick={(valor) => mudarFiltro(valor)}
            >
              Completadas
            </BotaoDeFiltro>
          </div>

          <div>
            <button
              onClick={() => {
                mudarTarefas(tarefas.filter((t) => !t.completada));
              }}
            >
              Limpar completadas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

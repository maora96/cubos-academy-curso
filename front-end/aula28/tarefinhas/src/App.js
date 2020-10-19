import React from "react";
import "./App.css";

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

        <ul className="tarefas" id="a-fazer" hidden={filtro === "feitas"}>
          {tarefasNaoFeitas.map((tarefa) => (
            <li>
              <input type="checkbox" checked={tarefa.completada} />
              <span>{tarefa.nome}</span>
              <button>Deletar</button>
            </li>
          ))}
        </ul>

        <ul className="tarefas" id="feitas" hidden={filtro === "a-fazer"}>
          {tarefasFeitas.map((tarefa) => (
            <li>
              <input type="checkbox" checked={tarefa.completada} />
              <span>{tarefa.nome}</span>
              <button>Deletar</button>
            </li>
          ))}
        </ul>

        <div className="rodape">
          <div>
            {qtdAFazer} {qtdAFazer === 1 ? "item" : "itens"} a fazer
          </div>

          <div className="filtros">
            <button className={filtro === "todos" ? "ativo" : ""}>Todos</button>

            <button className={filtro === "a-fazer" ? "ativo" : ""}>
              A fazer
            </button>

            <button className={filtro === "feitas" ? "ativo" : ""}>
              Completadas
            </button>
          </div>

          <div>
            <button>Limpar completadas</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

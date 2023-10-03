import { useContext, useState } from "react";
import contexto from "./Contexto";

export default function Entrada() {
    const [nome, setNome] = useState("");
    const {add} = useContext(contexto);

  return (
    <div>
      <label>Nome</label>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <button onClick={() => add(nome)}>Salvar</button>
    </div>
  );
}

import { useState } from "react";

export default function Entrada({add}:any) {
    const [nome, setNome] = useState("");
  return (
    <div>
      <label>Nome</label>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <button onClick={() => add(nome)}>Salvar</button>
    </div>
  );
}

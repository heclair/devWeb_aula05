import { useState } from "react";

export default App; function App() {
  const [nome,setNome] = useState ("");
  const [lista,setLista] = useState ([] as string[]);

  function add (){
    const temp = [...lista,nome];
    setLista(temp);
    console.log(lista,temp);
  }

  return (
    <div>
      <div>
        <label>Nome</label>
        <input value={nome} onChange= {(e)=>setNome(e.target.value)}/>
        <button onClick={add}>Salvar</button>
      </div>
      <p>Quantidade: {lista.length}</p>
      <ol>
        {
          lista.map((item,i) => <li key={i}>{item}</li>)
        }
      </ol>
    </div>
);
}


import { useState } from "react";
import Entrada from "./Entrada";

export default App;
function App() {

  const [lista, setLista] = useState([] as string[]);

  function add(nome:string) {
    const temp = [...lista, nome];
    setLista(temp);
    console.log(lista, temp);
  }

  return (
    <div>
      <Entrada add={add} />
      {
        lista.length > 0 && 
        <div>
          <p>Quantidade: {lista.length}</p>
          <ol>
            {lista.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>
      }
    </div>
  );
}

import { useState } from "react";
import Entrada from "./Entrada";
import Lista from "./Lista";
import Contexto from "./Contexto";

export default App;
function App() {

  const [lista, setLista] = useState([] as string[]);

  function add(nome:string) {
    const temp = [...lista, nome];
    setLista(temp);
    console.log(temp);
  }

  return (
    <Contexto.Provider value ={{lista,add}}>
      <Entrada />
      <Lista />
    </Contexto.Provider>
  );
}

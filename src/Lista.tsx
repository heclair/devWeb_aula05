import { useContext } from "react";
import contexto from "./Contexto";


export default function Lista() {
    const {lista} = useContext(contexto);
  return (
    <div>
      <p>Quantidade: {lista.length}</p>
      <ol>
        {lista.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

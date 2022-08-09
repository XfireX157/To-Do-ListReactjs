import { useState } from "react";
import { Form } from "../components/Form";
import {List} from '../components/List'

function App() {

  const [handle, setHandle] = useState([])

  const newList = (list) => {
    console.log(list)


    setHandle([...handle, list])
  }

  return (
    <>
    <Form List={list => newList(list)}/>
    {handle.map((item) => <List
        nome={item.nome}
        number={item.number}
      /> 
    )}
    </>
  );
}

export default App;

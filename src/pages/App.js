import { useState } from "react";
import * as C from './AppStyle'
import { Form } from "../components/Form";
import {List} from '../components/List'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs'
import {Button} from '../components/Button'

function App() {

  const [handle, setHandle] = useState([])
  const [habilit, sethabilit] = useState(false)

  const newList = (list) => {
    setHandle([...handle, list])
    
  }

  const removeItem = (e) => {
    const sethandle = handle.filter(remove => remove.nome !== e.nome && remove.number !== e.number)
    setHandle(sethandle)
  }
  console.log(handle)
  return (
    <>
    <Form List={list => newList(list)}/>
    <Button type='button' 
      Click={() => sethabilit(true)}
    />

    {habilit ? (
        <C.ListUl>
        {handle.map((item) => <List
            key={item.nome}
            nome={item.nome}
            number={item.number}
            background='#1f1f3f'
            color='#fff'
            iconPrimary={<BsFillTrashFill/>}
            iconSecond={<BsPencilSquare/>}
            colorBtn="#fff"
            Click={(e) => removeItem(e)}
          /> 
        )}
        </C.ListUl>
    ) : (
      <></>
    )}
   
    </>
  );
}

export default App;

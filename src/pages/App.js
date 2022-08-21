import { useState } from "react";
import * as C from './AppStyle'
import { Form } from "../components/Form";
import {List} from '../components/List'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs'
import {Button} from '../components/Button'

function App() {

  const [handle, setHandle] = useState([])
  const [habilit, sethabilit] = useState(false)
  const [edit, setEdit] = useState({index: -1 ,nome: '', number: ''})

  const newList = (list) => {

    if(edit.index >= 0){
      setHandle(handle.map((item, index) => edit.index === index ? list : item))
    }else{
      setHandle([...handle, list])
    }

    setEdit({index: -1 ,nome: '', number: ''})
  }

  const removeItem = (index) => {
    const sethandle = handle.filter((__, i) => i !== index)
    setHandle(sethandle)
  }

  return (
    <>
    <Form 
      List={list => newList(list)}
      inputs={edit}
     /> 
    <Button 
      type='button' 
      Clicks={() => sethabilit(!habilit)}
      color="#fff"
      backgroundColor="#4190df"
    >Abrir</Button>

    {habilit ? (
        <C.ListUl>
        {handle.map((item, index) => 
          <List
              key={index + item.nome}
              nome={item.nome}
              number={item.number}
              background='#1f1f3f'
              color='#fff'
              iconPrimary={<BsFillTrashFill/>}
              iconSecond={<BsPencilSquare/>}
              colorBtn="#fff"
              Click={() => removeItem(index)}
              Clickse={() => setEdit({...item, index})}
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

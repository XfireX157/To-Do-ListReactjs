import { useEffect, useState } from "react";
import * as C from './AppStyle'
import { Form } from "../components/Form";
import {List} from '../components/List'
import { BsFillTrashFill, BsPencilSquare, BsFillArrowUpCircleFill} from 'react-icons/bs'
import Search from "../components/Search";
import Cookies from '../components/Cookies'
import ButtoTopWindon from "../components/ButtonTopWindon";

function App() {
  const [handle, setHandle] = useState([])
  const [habilit, sethabilit] = useState(false)
  const [edit, setEdit] = useState({index: -1 ,nome: '', number: ''})
  const [search, setSearch] = useState('')
  const [backTop, setBackTop] = useState(false)

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

  const Filtered = () => {
      if(!search) return handle
      return handle.filter(item => item.nome.includes(search))
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 70){
        setBackTop(true)
      }else{
        setBackTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }


  const cookies = () => {
    
  }

  console.log(window.scrollY)

  return (
    <>
    <Form 
      List={list => newList(list)}
      inputs={edit}
     /> 

    <C.OpenButton>
      <button
        type='button' 
        onClick={() => sethabilit(!habilit)}
      >+</button>
    </C.OpenButton>

    {habilit ? (
      <>
        <div>
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar"
              backgroundColor="#1f1f3f"
              color="#000"
            />
        </div>
        <C.ListUl>
        {Filtered().map((item, index) => 
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
         
         {backTop && (
             <ButtoTopWindon 
              onClick={scrollUp}
             ><BsFillArrowUpCircleFill/></ButtoTopWindon>
          )}
        </C.ListUl>
       
      </>
    ) : (
      <></>
    )}
        <Cookies/>
    </>
  );
}

export default App;

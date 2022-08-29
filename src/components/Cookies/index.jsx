import { useEffect } from 'react'
import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import * as C from './style'

const Cookies = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [cookies, setCookies] = useState('')

    useEffect(() => {   
        if(!localStorage.getItem('myCookies'))
        setTimeout(() => {
            setIsOpen(true)
        }, 2000)

    }, [])

    const isCookies = () => {
        setIsOpen(false)
        localStorage.setItem('myCookies', 'true')        
    }

    return(
    <>
        {isOpen && (
            <C.Container>
                <C.Close onClick={() => setIsOpen(false)}><AiOutlineClose/></C.Close>
                    <C.BoxInfo>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse, facere saepe nemo dignissimos aperiam hic, maxime temporibus quia neque ea! Est excepturi nulla ad ratione, harum obcaecati <Link to="/">Politica de privacidade</Link></p>
                    </C.BoxInfo>
                <C.BoxConfig>
                    <C.Btn primary>Cookies Settings</C.Btn>
                    <C.Btn onClick={() => isCookies()}>Accept</C.Btn>
                </C.BoxConfig>
            </C.Container>
        )}
       
    </>
    )
}

export default Cookies 
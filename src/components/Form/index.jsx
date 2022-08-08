import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import * as C from './styled'

export const Form = (props) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError]= useState(false)

    const handleChange = (e) => {
        e.preventDefault()

        console.log(name)
        
        if(name.length < 4) {
            setError(true)
        }else {
            setError(false)

            setNumber('')
            setName('')

            props.List({
                name,
                number
            })

        }
    }

    console.log(name, number)

    return (
        <C.Form onSubmit={handleChange}>
            <C.Legend>To-Do-List</C.Legend>

            <Input
                type='text'
                value={name}
                Change={(e) => setName(e)}
                placeholder='Digite...'
                id='name'
                colorInput='#f8f8f8'
                backgroundInput='#1f1f3f'
                colorPlaceHold='#f8f8f8'
                required
            />
            {error ? (
                <p>Campo invalido</p>
            ): ('')}

            <Input
                type='number'
                value={number}
                Change={(e) => setNumber(e)}
                placeholder='Digite...'
                id='number'
                colorInput='#f8f8f8'
                backgroundInput='#1f1f3f'
                colorPlaceHold='#f8f8f8'
                required
            />
              {error ? (
                <p>Campo invalido</p>
            ): ('')}

            <Button 
                type='submit'
                backgroundColor='#4190df'
                color='#f8f8f8'
                backgroundHover='#1560aa'
            >Enviar</Button>
        </C.Form>
    )
}
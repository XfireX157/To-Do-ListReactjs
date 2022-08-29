import * as C from './style'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = (props) =>{
    return(
        <C.Box
            backgroundColor={props.backgroundColor}
            color={props.color}
        >
            <C.InputSearch
                type='search'
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
            />
            <C.icon><AiOutlineSearch/></C.icon>
        </C.Box>
    )
}

export default Search
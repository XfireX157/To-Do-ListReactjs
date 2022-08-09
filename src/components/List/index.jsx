import * as C from './styled'

export const List = (props) => {
    return (
        <C.ListUl>
            <li key={props.nome}>
                <h2>{props.nome}</h2>
                <h3>{props.number}</h3>
            </li>
        </C.ListUl>
    )
}
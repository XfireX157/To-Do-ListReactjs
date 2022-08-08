import * as C from './styled'

export const List = (props) => {
    return (
        <C.ListUl>
            {props.list.map(item => {
                <li key={item.name}>
                    <h2>{item.name}</h2>
                    <h3>{item.number}</h3>
                </li>
            })}
        </C.ListUl>
    )
}
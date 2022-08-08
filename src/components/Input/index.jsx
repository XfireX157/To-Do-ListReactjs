import * as C from  './styled'

export const Input = (props) => {
    return(
        <C.Box>
            <C.Icon>{props.icon}</C.Icon>
            <C.Input 
                type={props.type}
                value={props.value}
                onChange={(e) => props.Change(e.target.value)}
                placeholder={props.placeholder}
                id={props.id}
                required={props.required}
                colorInput={props.colorInput}
                backgroundInput={props.backgroundInput}
                colorPlaceHold={props.colorPlaceHold}
            />
        </C.Box>
    )
}
import * as C from './style'

const ButtoTopWindon = (props) => {
    return(
        <C.Button
            type='button'
            value={props.value}
            onClick={props.onClick}
        >
            {props.children}
        </C.Button>
    )
}

export default ButtoTopWindon
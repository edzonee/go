import "./Button.css"

const Button = (props) => {
    return(
        <div>
            <button className={props.class} onClick={props.onClick}>{props.children}</button>
        </div>
    )
}

export default Button
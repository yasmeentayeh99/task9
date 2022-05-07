import "./Button.css";

function Button (props){
    const border = props.border
    const color = props.color
    const children = props.children
    const height = props.height
    const onClick = props.onClick ;
    const radius = props.radius
    const width = props.width
    return (
        <button
            onClick={onClick}
            style={{
               color,
                border,
               radius,
                height,
                width
            }}
        >
            {children}
        </button>
    );
}

export default Button;
import  React  from "react";
import PropsTypes from "prop-types";
import "../style/Button.css";

const Button = ({text, variant, action}) => {
    return (
        <>
            <button className={`btn btn-${variant}`} onClick={action}>{text}</button>
        </>
    )
}

Button.propTypes = {
    text : PropsTypes.string.isRequired,
    variant : PropsTypes.string.isRequired,
    action : PropsTypes.func,
}

export default Button;
import React from 'react'; 

const Button = (props) => {
    return (
        <button className={props.className}> {props.value} </button>
    );
}

export default Button;
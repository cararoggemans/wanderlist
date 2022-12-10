import React from 'react'

function Button(props) {
  return (
    <button className={props.classes}>
      {props.buttonText}
    </button>
  )
}

Button.defaultProps = {
    buttonText: "Button",
    classes: 'btn btn-primary'
}

export default Button

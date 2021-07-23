import React from 'react'
import './inputs.css'
const Input = (props) => {
    return (
        <div>
             <div className="form-label-group">
                <input type={props.type} name={props.name} id={props.id} className="form-control"
                     required autofocus onChange={props.onChange}/>
                <label for={props.id}>{props.placeholder}</label>
            </div>
        </div>
    )
}

export default Input

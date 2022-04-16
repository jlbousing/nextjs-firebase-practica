import React from 'react'
import { faGoogle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function GoogleAuthButton(props) {
  return (
    <div>
        <div className="bg-green-600 text-white rounded p-5 cursor-pointer"
            onClick={() => {
                console.log("boton google")
                props.action();
            }}>
            Google
        </div>
    </div>
  )
}

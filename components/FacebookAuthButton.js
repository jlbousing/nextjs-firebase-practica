import React from 'react'

export default function FacebookAuthButton(props) {
  return (
    <div>
        <div className="bg-blue-700 text-white rounded p-5 cursor-pointer"
            onClick={() => {
                console.log("boton facebook")
                props.action();
            }}>
            Facebook
        </div>
    </div>
  )
}

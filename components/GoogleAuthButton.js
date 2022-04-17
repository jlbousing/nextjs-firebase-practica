import React from 'react'

export default function GoogleAuthButton(props) {
  return (
    <div>
        <div className="bg-red-600 text-white rounded p-5 mx-3 cursor-pointer"
            onClick={() => {
                console.log("boton google")
                props.action();
            }}>
            Google
        </div>
    </div>
  )
}

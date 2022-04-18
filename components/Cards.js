import React from 'react'

export default function Cards(props) {
  return (
    <div>
        <div className="w-full bg-white rounded shadow border p-6">
            <h5 className="text-3xl font-bold mb-4 mt-0">{props.titulo}</h5>
            <div className="w-full">
                <iframe width="300" height="315" className="text-center flex justify-center mx-auto"
                    src={props.linkVideo}>
                </iframe>
            </div>
            <p className="text-gray-700 text-sm">{props.descripcion}</p>
        </div>
    </div>
  )
}

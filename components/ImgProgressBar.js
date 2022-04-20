import React from 'react'

export default function ImgProgressBar(props) {
  return (
    <div>
        <div className="bg-blue-700 text-white flex" 
             style={{width: !props.progress ? "0%" : `${props.progress}%`}}>
            <span>Porcentaje de subida: </span>
            <span>{!props.progress ? "0%" : props.progress}</span>
        </div>
    </div>
  )
}

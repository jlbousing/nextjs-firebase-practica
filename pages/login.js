import React from 'react'

export default function Login() {
  return (
    <div>
        <div className="bg-white flex flex-col lg:flex-row p-20">

            <div className="w-full lg:w-1/2">
                <div className="flex flex-col lg:px-20 lg:border-r-2">

                    <div className="text-blue-700 text-2xl mt-8 text-center">
                        <h1>Bienvenido al VideoBlog Geek</h1>
                    </div>

                    <div className="text-xl mt-2 lg:mt-8 text-center">
                        <p>
                            Publica, aprende y conecta con otros por medio de videos geek
                        </p>
                    </div>

                    <div className="mt-2 lg:mt-8 text-center text-lg text-green-500">
                        <h2>Empieza ahora</h2>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                <div className="flex flex-col pt-6 lg:px-20">

                    <div className="w-full text-blue-700">
                        <div className="px-2">
                            <label>Email:</label>
                        </div>
                        <input className="border-solid border-2 border-blue-700 rounded-md mx-3"></input>
                    </div>

                    <div className="pt-2 w-full text-blue-700">
                        <div className="px-2">
                            <label>Password:</label>
                        </div>
                        <input type="password" className="border-solid border-2 border-blue-700 rounded-md mx-3"></input>
                    </div>

                    <div className="pt-8 w-full text-center text-2xl flex justify-items-start">
                        <button className="px-8 py-2 bg-blue-700 text-white">Registrarse</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

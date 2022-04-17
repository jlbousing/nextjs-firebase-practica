import { useState } from "react"
import { useAuth } from "../AuthUserProvider";
import Alert from "../components/Alert";
import Success from "../components/Success";

export default function recovery() {

  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { activePopUptoSign } = useAuth();

  const onSubmit = (event) => {

    event.preventDefault();

    if(email){
        
        const firebase = activePopUptoSign();
        firebase.auth().sendPasswordResetEmail(email)   
            .then(() => {
                let message = "se ha enviado un correo electronico  para recuperar el password!!";
                setSuccess(message);
                console.log("se activa success ",success);
                console.log("se activa success ",message);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            })
    }

  }
  return (
    <form onSubmit={onSubmit}>

        {error && <Alert title={"Error"} 
                         message={error}
                         closeError={setError(null)} />}
        {success && <Success title={"Mensaje enviado con exito Exito"} 
                             message={success} 
                            closeError={setSuccess(null)} />}
        <div className="w-full text-blue-700 text-center pt-20">
            <div className="px-2">
                <label>Ingrese el email para recibir un correo y recuperar su password &#128512;</label>
            </div>
            <input className="border-solid border-2 border-blue-700 rounded-md mx-3"
                onChange={(event) => setEmail(event.target.value)}></input>
        </div>

        <div className="pt-8 w-full text-center text-2xl flex justify-center">
                            <input 
                                type="submit" 
                                className="px-8 py-2 bg-blue-700 text-white hover:bg-blue-300"
                                value="Recuperar"/>
                        </div>
    </form>
  )
}

import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../AuthUserProvider';
import Alert from '../components/Alert';


export default function Register() {

    //SE DEFINE name, email Y password DENTRO DEL ESTADO DEL COMPONENTE

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const { createUserWithEmailAndPassword, signOut } = useAuth();

    
    const router = useRouter();

    const validateData = (name,email,password) => {

        if(!name)
            return false;

        if(!email)
            return false;
        
        if(!password)
            return false;
            
        return true;
    }

    const closeAlert = () => {
        setError(null);
    }

    const onSubmit = (event) => {
        
        event.preventDefault();

        console.log("probando registro ");

        if(validateData(name,email,password)){
            
            createUserWithEmailAndPassword(email,password)
                .then((result) => {
                    console.log("Se ha registrado un usuario en firebase correctamente ",result);

                    //SE ACTUALIZA EL NOMBRE DEL USUARIO
                    result.user.updateProfile({
                        displayName: name
                    }).then((result) => {
                        console.log("se ha actualizado la informacion correctamente ",result);
                    }).catch((err) => console.log(err));

                    //SE ENVIA UN EMAIL DE VERIFICACION
                    result.user.sendEmailVerification();

                    //SE DESLOGEA AL USUARIO PARA QUE ESTE VERIFIQUE EN SU CORREO EL ENLACE ENVIADO
                    signOut()
                        .then(() => router.push("/login"));
                })
                .catch((err) => {
                    console.log(err);
                    setError(err.message);
                });
        }else{
            setError("Datos de formulario incorrectos, pruebe otra vez");
        }
    };

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

                <form 
                    onSubmit={onSubmit}
                >
                    {error && <Alert 
                                title={"Error"} 
                                message={error}
                                closeError={closeAlert} />}
                    <div className="pt-2 w-full text-blue-700">
                        <div className="px-2">
                            <label>Nombre:</label>
                        </div>
                        <input className="border-solid border-2 border-blue-700 rounded-md mx-3"
                        onChange={(event) => setName(event.target.value)}></input>
                    </div>

                    <div className="w-full text-blue-700">
                        <div className="px-2">
                            <label>Email:</label>
                        </div>
                        <input className="border-solid border-2 border-blue-700 rounded-md mx-3"
                        onChange={(event) => setEmail(event.target.value)}></input>
                    </div>

                    <div className="pt-2 w-full text-blue-700">
                        <div className="px-2">
                            <label>Password:</label>
                        </div>
                        <input type="password" className="border-solid border-2 border-blue-700 rounded-md mx-3"
                        onChange={(event) => setPassword(event.target.value)}></input>
                    </div>

                    <div className="pt-8 w-full text-center text-2xl flex justify-items-start">
                        <input 
                            type="submit" 
                            className="px-8 py-2 bg-blue-700 text-white hover:bg-blue-300"
                            value="Registrarse"/>
                    </div>
                </form>
            </div>

            </div>

        </div>

        <div className="bg-white flex flex-col lg:flex-row lg:pt-20">

            <div className="w-full text-center text-2xl flex justify-center">
                <button className="px-8 py-2 bg-blue-700 text-white hover:bg-blue-300">Ya tengo una cuenta</button>
            </div>
        </div>
    </div>
  )
}

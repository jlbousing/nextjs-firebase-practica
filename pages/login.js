import React, {useState} from 'react'
import { useAuth } from '../AuthUserProvider';
import { useRouter } from 'next/router';
import Alert from '../components/Alert';
import Link from 'next/link';
import GoogleAuthButton from '../components/GoogleAuthButton';
import FacebookAuthButton from '../components/FacebookAuthButton';


export default function Login() {

  //SE DEFINE name, email Y password DENTRO DEL ESTADO DEL COMPONENTE
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const { 
    signInWithEmailAndPassword, 
    activePopUptoSign
   } = useAuth();

  const router = useRouter();

  const validateData = (email,password) => {

    if(!email)
        return false;
    
    if(!password)
        return false;
        
    return true;
  };

  const closeAlert = () => {
    setError(null);
  }

  const googleAuth = () => {
      let firebase = activePopUptoSign();
      let provider = new firebase.auth.GoogleAuthProvider();

      return firebase.auth().signInWithPopup(provider)
        .then((result) => {
          console.log("Usuario logeado con google auth ",result);

          result.user.updateProfile({
            photoURL: result.user.photoURL
          });

          router.push("/");

        })
  }

  const facebookAuth = () => {

    let firebase = activePopUptoSign()

    let provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log("Usuario logeado con facebook auth ",result);
            router.push("/");
      })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("probando login");

    if(validateData(email,password)){

        signInWithEmailAndPassword(email,password)
            .then((result) => {
                console.log("se ha autenticado el usaurio correctamente ",result);
                router.push("/");
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            })
    }else{
        setError("Datos de formulario incorrectos, pruebe otra vez");
    }
  }


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
                                value="Acceder"/>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col pt-6 lg:px-20">
                     <div 
                     className='w-full text-center text-blue-700 text-lg justify-center lg:w-1/5'>
                        <h1>INGRESA CON:</h1>
                     </div>
                     <div className='flex flex-row justify-center'>
                        <GoogleAuthButton
                            action={googleAuth}
                        />
                        <FacebookAuthButton
                            action={facebookAuth}
                         />
                     </div>      
                </div>
            </div>

        </div>

        <div className="bg-white flex flex-col lg:flex-row lg:pt-20">

            <div className="w-full text-center text-2xl flex justify-center">
                <Link href={"/register"}>
                    <a>
                    <button className="px-8 py-2 bg-blue-700 text-white hover:bg-blue-300">No tengo una cuenta</button>
                    </a>
                </Link>
            </div>
        </div>
    </div>
  )
}

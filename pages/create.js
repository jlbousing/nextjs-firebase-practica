import {useState, useEffect} from 'react'
import Link from 'next/link';
import DatabaseController from '../firebase/firebaseFirestore';
import Alert from '../components/Alert';
import { useAuth } from '../AuthUserProvider';
import { useRouter } from 'next/router';
import { validateAccess } from "../firebase/validateAccess";
import Success from '../components/Success';
import ImgProgressBar from '../components/ImgProgressBar';
import { data } from 'autoprefixer';


export default function create() {

    const { authUser } = useAuth();
    const router = useRouter();
    
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [titulo,setTitulo] = useState(null);
    const [descripcion,setDescripcion] = useState(null);
    const [videoUrl,setVideoUrl] = useState(null);
    const [imagen,setImagen] = useState(null);
    const [progress, setProgress] = useState(0);

    const closeAlert = () => {
        setError(null);
        setSuccess(null);
    }

    const validateData = (titulo,descripcion,videoUrl,imagen) => {

        if(!titulo)
            return false;
        
        if(!descripcion)
            return false;
        
        if(!videoUrl)
            return false;

        return true;
    }

    const clearData = () => {
        document.getElementById("formulario").reset();
        setTitulo(null);
        setDescripcion(null);
        setImagen(null);
        setVideoUrl(null);
    }

    const uploadImg = (event) => {

        let file =  event.target.files[0];

        let databaseController = new DatabaseController();
        
        let task = databaseController.subirImagenPost(file,authUser.uid);

        task.on("state_changed", snapshot => {

            const porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(porcentaje);

        },error => {

            console.log(error);
        },
        () => {

            task.snapshot.ref.getDownloadURL()
                .then((url) => {
                    console.log(url)
                    //SE GUARDA RUTA DE LA IMAGEN PARA PODER USARLA
                    localStorage.setItem("newImgBlog",url);
                })

        })
        
    }

    const onSubmit = (event) => {

        event.preventDefault();

        if(!validateData(titulo,descripcion,videoUrl,imagen)){
            setError("Datos de formularios invalidos")
        }
        else{
            
            if(authUser){

                let databaseController = new DatabaseController();
                setImagen(localStorage.getItem("newImgBlog"));

                databaseController.createPost(
                    authUser.uid,authUser.displayName,authUser.email,titulo,descripcion,imagen,videoUrl
                ).then(() => {

                    clearData();
                    setSuccess("Se ha registrado un post de manera correcta");

                }).catch((error) => {
                    console.log(error);
                    setError("Ups!!! ha ocurrido un error al enviar el post, intente otra vez");
                })
            }else{
                console.log("error al registrar post");
            }

        }
    }
  
    return (
        <div>
            <div className="bg-white flex flex-col lg:flex-row p-20">
    
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col lg:px-20 lg:border-r-2">
    
                        <div className="text-blue-700 text-2xl mt-8 text-center">
                            <h1>Realiza un Post</h1>
                        </div>
    
                        <div className="text-xl mt-2 lg:mt-8 text-center">
                            <p>
                                Comparte un video interesante para la comunidad
                            </p>
                        </div>
    
                        <div className="mt-2 lg:mt-8 text-center text-lg text-green-500">
                            <h2>Comparte ahora</h2>
                        </div>
                    </div>
                </div>
    
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col pt-6 lg:px-20">
                    
                        <form 
                            onSubmit={onSubmit}
                            id="formulario"
                        >
                         
                         {error && <Alert 
                                    title={"Error"} 
                                    message={error}
                                    closeError={closeAlert}
                                     />}

                         {success && <Success 
                                    title={"Exito"} 
                                    message={success}
                                    closeError={closeAlert}
                                     />}
    
                            <div className="w-full text-blue-700">
                                <div className="px-2">
                                    <label>Titulo:</label>
                                </div>
                                <input className="border-solid border-2 border-blue-700 rounded-md mx-3"
                                    onChange={(event) => setTitulo(event.target.value)}></input>
                            </div>
    
                            <div className="pt-2 w-full text-blue-700">
                                <div className="px-2">
                                    <label>descripcion:</label>
                                </div>
                                <textarea type="password" className="border-solid border-2 border-blue-700 rounded-md mx-3"
                                onChange={(event) => setDescripcion(event.target.value)}></textarea>
                            </div>

                            <div className="w-full text-blue-700">
                                <div className="px-2">
                                    <label>Enlace del video:</label>
                                </div>
                                <input className="border-solid border-2 border-blue-700 rounded-md mx-3"
                                    onChange={(event) => setVideoUrl(event.target.value)}></input>
                            </div>

                            <div className="w-full text-blue-700">
                                <div className="px-2">
                                    <label>Imagen:</label>
                                </div>
                                <input type="file" className="w-full border-solid border-2 border-blue-700 rounded-md mx-3"
                                    onChange={(event) => uploadImg(event)}></input>
                                
                                <ImgProgressBar progress={progress} />
                            </div>
    
                            <div className="pt-8 w-full text-center text-2xl flex justify-items-start">
                                <input 
                                    type="submit" 
                                    className="px-8 py-2 bg-blue-700 text-white hover:bg-blue-300"
                                    value="Crear Post"/>
                            </div>
                        </form>
                    </div>

                </div>
    
            </div>

        </div>
      )
}

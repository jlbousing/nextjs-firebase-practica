import firebase from './firebaseConfig';

class DatabaseController {

    constructor(){

        this.db = firebase.firestore();
        
    }

    initSettings(){
        const settings = { timestampsInSnapShots: true };
        this.db.settings(settings);
    }

    createPost(uid, autor, emailUser, titulo, descripcion, imagenLink, videoLink){
        
        return this.db.collection("posts").add({
            uid: uid,
            autor: autor,
            emailUser: emailUser,
            titulo: titulo,
            descripcion: descripcion,
            imagenLink: imagenLink,
            videoLink: videoLink,
            fecha: firebase.firestore.FieldValue.serverTimestamp() //obtener la fehca y hora del servidor
        }).then((refDoc) => {
            console.log(`id del post ${refDoc.id}`);
        }).catch((error) => console.log("error al crear el posts"));
    }

    consultarTodosPosts(){

       return this.db.collection("posts");
    }

    subirImagenPost(file, uid){

        const refStorage = firebase.storage().ref(`imgsPosts/${uid}/${file.name}`);

        const task = refStorage.put(file);
        
        return task;

        /*task.on("state_changed", snapshot => {
            
            const porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
        }) */
    }
}

export default DatabaseController;
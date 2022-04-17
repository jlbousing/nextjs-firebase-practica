import firebase from './firebaseConfig';

class DatabaseController {

    constructor(){
        this.db = firebase.firestore();
        const settings = { timestampsInSnapShots: true};
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
}

export default DatabaseController;
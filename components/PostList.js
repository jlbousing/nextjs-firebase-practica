import { data } from 'autoprefixer';
import React, {useEffect, useState} from 'react'
import DatabaseController from '../firebase/firebaseFirestore';
import Cards from './Cards';

export default function PostList() {

  const [postList,setPostList] = useState(null);
  const [onSnapshot,setOnSnapShot] = useState();
  const databaseController = new DatabaseController();

  const getPosts = async () => {
      let aux = databaseController.consultarTodosPosts();
      
      let array = [];
      aux.get()
        .then((result) => {
          setOnSnapShot(result.docs)
          console.log(onSnapshot)
        })

  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
        <div className="flex flex-col lg:flex-row flex-wrap">

          {onSnapshot && onSnapshot.map((post,k) => {
              return(
                <div key={k} className="w-full lg:w-1/2">
                    <Cards
                       titulo={post.data().titulo}
                       descripcion={post.data().descripcion}
                       linkVideo={post.data().videoLink}
                />
                </div>
              );
          })}
        </div>
    </div>
  )
}

import { useEffect } from 'react';
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useAuth } from '../AuthUserProvider';
import Link from 'next/link';

export default function Home() {

  const { authUser } = useAuth();

  const router = useRouter();

  useEffect(() => {
      console.log("probando authUser ",authUser);
      console.log("hey uya");
      if(!authUser){
        router.push("/login");
      }
  },[]);


  return (
    
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta name="description" content="Practica con firebase y Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col justify-center items-center bg-blue-500 p-20">

            <div className="w-full font-bold bg-green-500 text-white text-center p-5 my-10 rounded lg:w-1/5 lg:text-xl">
                <Link href="/posts">
                    <a>Todos los Posts</a>
                </Link>
            </div>

            <div className="w-full font-bold bg-green-500 text-white text-center p-5 my-10 rounded lg:w-1/5 lg:text-xl">
                Mis Posts
            </div>

            <div className="w-full font-bold bg-green-500 text-white text-center p-5 my-10 rounded lg:w-1/5 lg:text-xl">
                <Link href={"/create"}>
                  <a>
                    Realizar un Posts
                  </a>
                </Link>
            </div>

            <div className="w-full font-bold bg-green-500 text-white text-center p-5 my-10 rounded lg:w-1/5 lg:text-xl">
                Contactanos
            </div>
        </div>
      </main>

    </div>
  )
}

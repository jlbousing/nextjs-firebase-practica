import { useEffect } from 'react';
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useAuth } from '../AuthUserProvider';

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

    </div>
  )
}

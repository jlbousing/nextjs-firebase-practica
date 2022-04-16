import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../AuthUserProvider';

const LoggedIn = () => {
    const { authUser, loading } = useAuth();
    const router = useRouter();
  
    // Listen for changes on loading and authUser, redirect if needed
    useEffect(() => {
      if (!loading && !authUser)
        router.push('/login')
    }, [authUser, loading])
  
    return (
        <> 
            <span>hey uya</span> 
        </>
    )
  }
  
  export default LoggedIn;

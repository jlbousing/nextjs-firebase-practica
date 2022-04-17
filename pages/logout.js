
import { useEffect } from "react"
import { useAuth } from "../AuthUserProvider"
import { useRouter } from "next/router";


export default function logout() {

    const { signOut } = useAuth();
    const router = useRouter();

    useEffect(() => {
        signOut()
            .then(() => {
                router.push("/login");
            })
    }, []);

  return (
    <div></div>
  )
}

import { useEffect } from "react"
import { auth, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase"
import { getRedirectResult } from "firebase/auth"
import SignUpForm from "../../components/sign-up-form"



export default function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        await createUserDocumentFromAuth(response.user)
    }
    useEffect(() => {
        async function handleRedirectResult() {
            const response = await getRedirectResult(auth)
            if (response) {
                await createUserDocumentFromAuth(response.user)
            }
        }
        handleRedirectResult()
    }, [])



    return (
        <div>
            <h1>I am the sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
            <SignUpForm />
        </div>
    )
}


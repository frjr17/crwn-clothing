import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase"



export default function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(response.user)
        console.log(userDocRef)
    }

    return (
        <div>
            <h1>I am the sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
        </div>
    )
}


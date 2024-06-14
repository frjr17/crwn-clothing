import SignUpForm from "../../components/sign-up-form"
import SignInForm from "../../components/sign-in-form"
import { AuthenticationContainer } from "./authentication.styles.js"


export default function Authentication() {
    return (
        <AuthenticationContainer className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
}


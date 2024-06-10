import SignUpForm from "../../components/sign-up-form"
import SignInForm from "../../components/sign-in-form"
import './authentication.styles.scss'


export default function Authentication() {
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}


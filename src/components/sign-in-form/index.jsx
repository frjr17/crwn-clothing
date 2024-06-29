import { useState } from "react"
import FormInput from "../form-input"
import Button, { BUTTON_TYPE_CLASSES } from "../button"
import { signInWithGooglePopup } from "../../utils/firebase"
import { ButtonsContainer, SignUpContainer, SignUpTitle } from "./sign-in-form.styles"
import { useDispatch } from "react-redux"
import { emailSignInStart, googleSignInStart } from "../../store/user/actions"

const defaultFormFields = {
    email: '',
    password: '',
}

export default function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            dispatch(emailSignInStart(formFields.email, formFields.password))
            setFormFields(defaultFormFields)
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                alert('Invalid Email or password')
            }
            console.log('Error signing in', { ...error })
        }
    }

    return (
        <SignUpContainer className="sign-up-container">
            <SignUpTitle>Already have an account?</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    inputOptions={{
                        type: "email",
                        required: true,
                        name: "email",
                        onChange: handleChange,
                        value: formFields.email
                    }} />
                <FormInput
                    label='Password'
                    inputOptions={{
                        type: "password",
                        required: true,
                        name: "password",
                        onChange: handleChange,
                        value: formFields.password
                    }} />

                <ButtonsContainer className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}
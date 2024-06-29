import { useState } from "react"
import FormInput from "../form-input"
import Button from "../button"
import { SignUpContainer, SignUpTitle } from "./sign-up-form.styles"
import { useDispatch } from "react-redux"
import { signUpStart } from "../../store/user/actions"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export default function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formFields.password !== formFields.confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            dispatch(signUpStart(formFields))
            setFormFields(defaultFormFields)
        } catch (error) {
            console.log({ ...error })
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            } else {
                console.log('Error creating user', error.message)
            }
        }
    }

    return (
        <SignUpContainer className="sign-up-container">
            <SignUpTitle>Don't have an account?</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    inputOptions={{
                        type: "text",
                        required: true,
                        name: "displayName",
                        onChange: handleChange,
                        value: formFields.displayName
                    }} />
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
                <FormInput
                    label='Confirm Password'
                    inputOptions={{
                        type: "password",
                        required: true,
                        name: "confirmPassword",
                        onChange: handleChange,
                        value: formFields.confirmPassword
                    }} />
                <Button>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}
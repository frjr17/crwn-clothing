import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase"
import FormInput from "../form-input"
import './sign-up-form.styles.scss'
import Button from "../button"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export default function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields)

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
            const response = await createAuthUserWithEmailAndPassword(formFields.email, formFields.password)

            if (response) {
                await createUserDocumentFromAuth(response.user, { displayName: formFields.displayName })
            }
            setFormFields(defaultFormFields)
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            } else {
                console.log('Error creating user', error.message)
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
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
        </div>
    )
}
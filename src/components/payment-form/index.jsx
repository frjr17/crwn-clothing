import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../button";
import { FormContainer, PaymentButton, PaymentFormContainer } from "./styles";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/selectors";
import { selectCurrentUser } from "../../store/user/selectors";
import { useState } from "react";

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    async function paymentHandler(e) {
        e.preventDefault();

        if (!stripe || !elements) return;
        setIsProcessingPayment(true);
        const reponse = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
        })
        const { paymentIntent } = await reponse.json();
        const clientSecret = paymentIntent.client_secret;
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                },
            }
        });

        if (paymentResult.error) {
            alert(paymentResult.error)
            console.log('There was an error', paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful')
            }
        }
        setIsProcessingPayment(false);
    }


    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>

                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}
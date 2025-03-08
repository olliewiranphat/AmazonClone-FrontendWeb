import useAuthStore from '../../store/UserStore';

import React, { useCallback, useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useAuth } from '@clerk/clerk-react';
import { payment } from '../../api/user';
import useCartStore from '../../store/CartStore';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test secret API key.
const stripePromise = loadStripe("pk_test_51QzCa7GzgqobIesy3LmpQalmx0iSnxRk0BtLGV63GxiXrToSx3wqrHMHYvGuotSruzgdIKwizRgPuTWFhcPYqcCo007gTqy6RB");



function Payment() {
    const { getToken } = useAuth()
    const userCart = useCartStore(state => state.userCart)
    console.log('userCart', userCart);

    const fetchClientSecret = useCallback(async () => {
        const token = await getToken()
        const resPayment = await payment(token, userCart)
        console.log('resPayment', resPayment);
        return resPayment.data.clientSecret
    })
    const options = { fetchClientSecret } //= resPayment.data.clientSecret
    return (
        <div id="checkout">
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={options}
            >
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}

export default Payment
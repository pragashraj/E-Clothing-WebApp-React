import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton=({price})=>{
    const priceForSripe=price*100
    const publishKey='pk_test_CXkmJ4cc7Ap4BZJDGLDH8R3A00fs1ubI6N'

    const ontoken=token=>{
        console.log(token)
        alert('payment success')
    }
    return(
        <StripeCheckout
            label="Pay now"
            name="E-Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your Total is $${price}`}
            amount={priceForSripe}
            token={ontoken}
            stripeKey={publishKey}
        />
    )
}

export default StripeButton
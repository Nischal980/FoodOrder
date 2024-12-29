

import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { Button } from "@material-ui/core";
const myKey = {
    publicTestKey: "test_public_key_818cff00097c4b2c97e80324fbb55a6c",
    secretKey: "test_secret_key_23e30e8ebe864b7c9af87e14fd32c8ac",
};

const Khalti = ({loading,order}) => {

    let config = {
        publicKey: myKey.publicTestKey,
        productIdentity: "12555321",
        productName: "Nepal Trip",
        productUrl: "http://localhost:3000/checkout",
        eventHandler: {
            onSuccess() {
                order()
            },
            onError(error) {
            },
            onClose() {
                console.log("widget is closing");
            },
        },
        paymentPreference: [
            "KHALTI",
        ],
    };
    let checkout = new KhaltiCheckout(config);
    let buttonStyles = {
        backgroundColor: "purple",
        padding: "6px",
        color: "white",
        cursor: "pointer",
        fontWeight: "600",
        border: "1px solid white",
        ml:4
    }
    return (
        <>
            <Button disabled={loading}
                onClick={() => { checkout.show({ amount:1000 }); }}
                style={buttonStyles}
                id="khaltiBtn"
                >
                Khalti Pay
            </Button>
        </>
    );
}

export default Khalti;
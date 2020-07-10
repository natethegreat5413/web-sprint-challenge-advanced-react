import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const fnInput = screen.getByLabelText(/first name/i)
    const lnInput = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    fireEvent.change(fnInput, { target: { value: 'Nate'} })
    fireEvent.change(lnInput, { target: { value: 'Cowley'} })
    fireEvent.change(address, { target: { value: '963 E 5689 N'} })
    fireEvent.change(city, { target: { value: 'Lehi'} })
    fireEvent.change(state, { target: { value: 'Utah'} })
    fireEvent.change(zip, { target: { value: '84043'} })

    const checkout = screen.getByTestId(/checkout/i)
    fireEvent.click(checkout)

    const successMessage = screen.getByTestId(/successMessage/i)
    const success = screen.getByText(/You have ordered some plants! Woo-hoo!/i)
    expect(success).toBeInTheDocument()
});

import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />)
        getByText(/Checkout Form/i)
});

test("form shows success message on submit with form details", () => {
    const {getByLabelText, getByTestId} = render(<CheckoutForm />);

    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const address = getByLabelText(/address/i)
    const city = getByLabelText(/city/i)
    const state = getByLabelText(/state/i)
    const zip = getByLabelText(/zip/i)

    fireEvent.change(firstNameInput, {target: {value: 'nate'}})
    fireEvent.change(firstNameInput, {target: {value: 'cowley'}})
    fireEvent.change(firstNameInput, {target: {value: '874 e 7493 n'}})
    fireEvent.change(firstNameInput, {target: {value: 'Lehi'}})
    fireEvent.change(firstNameInput, {target: {value: 'Utah'}})
    fireEvent.change(firstNameInput, {target: {value: '84043'}})

    const submitButton = getByTestId(/checkout/i)
    fireEvent.click(submitButton);

    const successMessage = getByTestId(/successMessage/i)
});

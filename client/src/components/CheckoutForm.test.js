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

    const container = render(<CheckoutForm />);

    const firstName = container.getByLabelText(/first name/i);
    const lastName = container.getByLabelText(/last name/i);
    const address = container.getByLabelText(/address/i);
    const city = container.getByLabelText(/city/i);
    const state = container.getByLabelText(/state/i);
    const zip = container.getByLabelText(/zip/i);

    fireEvent.change(firstName, {target:{value:'Nate'}});
    fireEvent.change(lastName, {target:{value:'Cowley'}});
    fireEvent.change(address, {target:{value:'963 E 2180 N'}});
    fireEvent.change(city, {target:{value:'Lehi'}});
    fireEvent.change(state, {target:{value:'Ut'}});
    fireEvent.change(zip, {target:{value:'84043'}});

    const submitButton = container.getByText('Checkout');

    fireEvent.click(submitButton);

    const successMessage = container.getByTestId(/successMessage/i);

    expect(successMessage).toBeInTheDocument();


});


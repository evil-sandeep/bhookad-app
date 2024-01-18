import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import React from "react"
import Body from '../Body'
import { Provider } from "react-redux"
import store from '../../utils/store'
import { StaticRouter } from "react-router-dom/server"
import { API_URL } from "../../config"

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: Promise.resolve({ apiUrl: API_URL })
    })
})

test("Should ShimmerCard run  on HomePage", () => {
    render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    const shimmerCard = screen.getByTestId('shimmer-test')
    expect(shimmerCard).toBeInTheDocument()
    console.log(shimmerCard)
})




test("Should Resturant load on HomePage", async () => {
    render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )
    // Ensure that asynchronous operations are completed before checking the element
    await waitFor(() => expect(screen.getByTestId('search_txt')));
    console.log(screen.getByTestId('search_txt'));


    const resList = screen.getByTestId('res-list')

    expect(resList).toBeInTheDocument();
    const childElements = screen.getAllByTestId('child-element');
    expect(childElements.length).toBe(30);
})

test("Should Food on HomePage", async () => {
    render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(screen.getByTestId('search-btn')));

    const input = screen.getByTestId('search-input')
    fireEvent.change(input, {
        target: {
            value: 'book'
        }
    })
    const searchBtn = screen.getByTestId('search-btn');  // Corrected this line
    fireEvent.click(searchBtn)

    const resList = screen.getByTestId("res-list");  // Corrected this line
    expect(resList.length).toBe(3);
    console.log(screen.debug)
});

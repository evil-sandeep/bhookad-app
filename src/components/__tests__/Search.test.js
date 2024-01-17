import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import React from "react"
import Body from '../Body'
import { Provider } from "react-redux"
import store from '../../utils/store'
import { StaticRouter } from "react-router-dom/server"
import { API_URL } from "../../config"

global.fetch = jest.fn( () => {
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
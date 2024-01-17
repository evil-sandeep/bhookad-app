import React from "react";
import { render,screen } from "@testing-library/react"
import Header from "../NavBar";
import { Provider } from "react-redux";
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'
 
//Test-1 Check Logo show or not
test("Logo Should load on rendering header", () => {
    render(
        <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
    )
    const logo=screen.getAllByTestId('logo')
    console.log(logo)

    expect(logo[0].src).toBe('http://localhost/dummylogo.png')
})

//Test-2 Check Online status show or not
test("Check online status show on  rendering header", () => {
    render(
        <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
    )
    const onlineStatus=screen.getByTestId('online-status')
    console.log(onlineStatus)

    expect(onlineStatus.innerHTML).toBe('Online✅')
}) 
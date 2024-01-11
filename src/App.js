import React from 'react';

import Body from './components/Body';
import Header from './components/NavBar';
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />

    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element:<Body/>
      },
      {
        path: 'about',
        element:<About/>
      },
      {
        path: 'contact',
        element:<Contact/>
      },
      {
        path: 'cart',
        element:<Cart/>
      },
      {
        path: '/resturant/:id',
        element:<ProductDetails/>
      },

    ]
  }
])

function Main(){
  return(
    <RouterProvider router={appRouter}>
      <App/>
    </RouterProvider>
  )
}

export default Main;


import React, { lazy, Suspense, useState } from 'react';
import '../src/index.css'
import Body from './components/Body';
import Header from './components/NavBar';
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error';
import ContactForm from './components/Contact';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import ProfileClass from './components/ProfileClass';
import ShimmerCard from './components/Shimmer';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import store from './utils/store';
// import InstaMart from './components/InstaMart';



const InstaMart = lazy(() => import('./components/InstaMart'));
const About = lazy(() => import('./components/About'))



function App() {
  const [updateUser, setUpdateUser] = useState({
    name: "Sandeep Kumaar Sahoo",
    email: "chandanbabul@gmail.com"
  });
  return (
    <div className="App">
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: updateUser,
            setUpdateUser: setUpdateUser
          }} >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
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
        element: <Body />
      },
      {
        path: 'about',
        element: <Suspense fallback={<ShimmerCard />}>
          <About />
        </Suspense>,
        children: [
          {
            path: 'profile',
            element: <ProfileClass />,
          }
        ]
      },
      {
        path: 'contact',
        element: <ContactForm />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: '/resturant/:id',
        element: <ProductDetails />
      },
      {
        path: '/instamart',
        element: <Suspense fallback={<ShimmerCard />}>
          <InstaMart />
        </Suspense>
      },

    ]
  }
])

function Main() {
  return (
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  )
}

export default Main;


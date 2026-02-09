import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import User from './Components/User/User'
import Github, { githubInfoLoader } from './Components/Github/Github'

const router = createBrowserRouter([
  { //iska mtlb hai ye hum react router dom ki help se kr paa rha h mtlb / par humesha jo layout humne layout file me create kiya hai wo to humesha rehna chahiye jse usme header or foooter or becch wali values change hoti hai jse home about etc to wo us layout me aa jati h wo ek dynamic variable ki trh treat krta h or uss dynamic variable ki values hum yaha children array me multiple object bnakr dete hai ye nested routing hoti h 
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "user/:userid",
        element: <User/>
      },
      {
        loader:githubInfoLoader,
        path: "github",
        element: <Github/>
      }
    ]
  }
])

//  ek duplicate aasan trika
// const router = createBrowserRouter (
// createRoutesFromElements(
// <Route path='/' element={<Layout />}>
// ‹Route path='' element={<Home />} />
// <Route path='about' element={<About />} />
// <Route path='contact' element={<Contact />} />
// </Route>


// ye routerprovider props leta h
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)

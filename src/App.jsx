import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout, { loader as MainLoader } from './Components/Layout'
import ErrorPage from './Components/ErrorPage'
import Customer, { loader as customerLoader } from './Components/Customer'
import Home from './Components/Home'

const router = createHashRouter([
  {
    path: '/', element: <Layout />, errorElement: <ErrorPage />, id: 'home-id', loader: MainLoader, children: [
      { index: true, element: <Home /> },
      { path: 'customers/:id', element: <Customer />, loader: customerLoader },
    ]
  },

])

export default function App() {

  return <RouterProvider router={router} />

}
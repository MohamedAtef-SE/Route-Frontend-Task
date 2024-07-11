import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout, { loader as MainLoader } from './Components/Layout'
import ErrorPage from './Components/ErrorPage'
//import Customer from './Components/Customer'
import { lazy, Suspense } from 'react'
import Loading from './Components/Loading';

const Home = lazy(() => import('./Components/Home'));
const Customer = lazy(() => import('./Components/Customer'))


const router = createHashRouter([
  {
    path: '/', element: <Layout />, errorElement: <ErrorPage />, id: 'home-id', loader: MainLoader, children: [
      {
        index: true, element: <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      },
      {
        path: 'customers/:id', element: <Suspense fallback={<Loading />}>
          <Customer />
        </Suspense>
      },
    ]
  },

])

export default function App() {

  return <RouterProvider router={router} />

}
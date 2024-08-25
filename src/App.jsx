import './app.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home'
import Navbar from './components/Navbar';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/comp',
        element: <Navbar/>
      }

    ]
  }
])
function App() {

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App

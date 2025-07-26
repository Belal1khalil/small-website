
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";



export default function App() {

   const router = createBrowserRouter([
    {
      path: "/",
      element: (
         <Layout/>
      ), children: [
        {index: true, element: <Home />},
        {path: "product/:id", element: <ProductDetails/>},
      ]
    }
   ]) 
  return (
    <>
      
     <RouterProvider router={router}/>
     
    </>
  )
}


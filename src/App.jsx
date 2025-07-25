import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

 function App() {
   
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home/>
        </Layout>
      ),
   },
    {
      path: "/product/:id",
      element: (
        <Layout>
          <ProductDetails />
        </Layout>
     ),
    },
 ]);
 
   return (
     <>
     <RouterProvider router={router}/>
     </>
  )
 }
 
 export default App

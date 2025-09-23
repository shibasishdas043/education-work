import React from "react";
import "./index.css";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Nvabar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from './components/ContactForm';
import NotFound from "./components/NotFound";

function App() {




  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="About" element={<About />} />
        <Route path="Contacts" element={<ContactLayout />}>
          <Route path="ContactInfo" element={<ContactInfo />} />
          <Route path="ContactForm" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

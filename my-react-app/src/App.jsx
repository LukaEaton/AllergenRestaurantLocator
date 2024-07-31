import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar/>}>
      <Route index element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Route>
  )
);

function App() {
  return (
    <>
      <div id="content">
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App

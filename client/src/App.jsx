
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import AddPage from './Pages/AddPage';
import WishPage from './Pages/WishPage';
import CartPage from './Pages/CartPage';
import Details from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/add' element={<AddPage/>}/>
          <Route path='/wish' element={<WishPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/:id' element={<Details/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Context from './context/context.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './views/Home.jsx'
import Pizza from './views/Pizza.jsx'
import Cart from './views/Cart.jsx'
import Payment from './views/Payment.jsx'
import NotFound from './views/NotFound.jsx'
import Dashboard from './views/Dashboard.jsx' 
import { formatPrice } from './utils/utils.js'

function App() {
  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((pizza) => pizza.id === item.id)
    const updateCart = [...cart]

    if (itemIndex === -1) {
      const pizza = {
        id: item.id,
        count: 1,
        price: item.price,
        img: item.img,
        name: item.name
      }

      updateCart.push(pizza)
    } else {
      updateCart[itemIndex].count += 1
    }

    setCart(updateCart)
  }

  const removeFromCart = (item) => {
    const itemIndex = cart.findIndex((pizza) => pizza.id === item.id)
    const updateCart = [...cart]

    updateCart[itemIndex].count -= 1

    if (updateCart[itemIndex].count <= 0) {
      updateCart.splice(itemIndex, 1)
    }

    setCart(updateCart)
  }

  const cartTotal = () => {
    let total = 0
    cart.forEach((item) => total += item.count * item.price)

    return formatPrice(total)
  }

  useEffect(() => {
    fetch('/pizzas.json')
      .then((res) => res.json())
      .then((json) => setMenu(json))
      .then((error) => console.log(error))
  }, [])

  const globalState = { menu, cart, addToCart, removeFromCart, cartTotal }

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/pizza/:id' element={<Pizza />}></Route>
            <Route path='/carrito' element={<Cart />}></Route>
            <Route path='/pagar' element={<Payment />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App

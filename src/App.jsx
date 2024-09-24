
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from "./component/Footer"
import Header from "./component/Header"
import Indexpage2 from "./component/Home/Indexpage2"
import Shop from "./component/Home/Shop"
 import Blogs from "./component/Home/Blogs"

import About from "./component/Home/About"
 import BlogsDetails from "./component/Home/BlogsDetails"
 import Cart from "./component/Home/Cart"
 import Checkout from "./component/Home/Checkout"
 import Contact from "./component/Home/Contact"
import Faq from "./component/Home/Faq"
import ShopDetails from "./component/Home/ShopDetails"
import IndexPage from "./component/Home/IndexPage"

function App() {
 
  return (  
  <Router>
     <Header />
       <Routes>     
      
        <Route path="/about" element={<About  titile={"anil"} />} />
        <Route path="/contact" element={<Contact />} />     

        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blogs />} />   

        <Route path="/blogsDetails" element={<BlogsDetails />} />
        <Route path="/cart" element={<Cart />} />   

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/faq" element={<Faq />} />   

        <Route path="/shopDetails" element={<ShopDetails />} />
        <Route path="/indexPage" element={<IndexPage />} />  

        <Route path="/" element={<Indexpage2 />} /> 
      </Routes>
    <Footer />
  </Router>

  )
}

export default App

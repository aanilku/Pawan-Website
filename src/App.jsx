import Footer from "./component/Footer"
import Header from "./component/Header"
import Blogs from "./component/Home/Blogs"

//import About from "./component/Home/About"
import BlogsDetails from "./component/Home/BlogsDetails"
import Cart from "./component/Home/Cart"
import Checkout from "./component/Home/Checkout"
//import IndexPage from "./component/Home/IndexPage"

function App() {
 
  return (
    <>
    <Header></Header>
    <Checkout></Checkout>
    <Cart></Cart>
    <Blogs></Blogs>
  <BlogsDetails />
    {/* <About /> */}
    {/* <IndexPage></IndexPage> */}
   <Footer></Footer>
    </>
  )
}

export default App

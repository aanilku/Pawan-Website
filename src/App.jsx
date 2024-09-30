import { Route, Routes ,useLocation } from "react-router-dom";
//import { useRole } from './RoleContext';
import Footer from "./component/Footer";
import Header from "./component/Header";
import Indexpage2 from "./component/Home/Indexpage2";
import Shop from "./component/Home/Shop";
import Blogs from "./component/Home/Blogs";

import About from "./component/Home/About";
import BlogsDetails from "./component/Home/BlogsDetails";
import Cart from "./component/Home/Cart";
import Checkout from "./component/Home/Checkout";
import Contact from "./component/Home/Contact";
import Faq from "./component/Home/Faq";
import ShopDetails from "./component/Home/ShopDetails";
import IndexPage from "./component/Home/IndexPage";
import Login from "./component/Home/login";
import Register from "./component/Home/register";

//import userRole from "./component/useRole ";

function App() {
  const location = useLocation(); 
  //const { role } = useRole();

  const isLoginPage = location.pathname === '/login' || location.pathname === '/register';
//  const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

//  const renderHeader = () => {
//   if (isLoginPage) return null;
//   switch (role) {
//     case 'admin':
//       return <AdminHeader />;
//     case 'user':
//       return <UserHeader />;
//     default:
//       return <GuestHeader />;
//   }
// };

// const renderFooter = () => {
//   if (isLoginPage) return null;
//   switch (role) {
//     case 'admin':
//       return <AdminFooter />;
//     case 'user':
//       return <UserFooter />;
//     default:
//       return <GuestFooter />;
//   }
// };

// return (
//   <>
//     {renderHeader()}
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/" element={<Home />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
//     {renderFooter()}
//   </>
// );

  return (
    <>
        {isLoginPage ? "" : <Header />}
      {/* <Header /> */}
      <Routes>
        <Route path="/about" element={<About titile={"anil"} />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/blogsDetails" element={<BlogsDetails />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/shopDetails" element={<ShopDetails />} />
        <Route path="/indexPage" element={<IndexPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Indexpage2 />} />
      </Routes>
      {/* <Footer /> */}
      {isLoginPage ? "" : <Footer />}
    </>
  );
}

export default App;

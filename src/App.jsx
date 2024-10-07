import { Route, useLocation, Routes,Navigate  } from "react-router-dom";
// import { useState } from "react";
//import { useRole } from './RoleContext';

 import UserLayout from "./component/Shared/UserLayout";
 // import Header from "./component/Header";
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

//import userRole from "./component/useRole "

import AdminLayout from "./component/Shared/AdminLayout";
import AdminIndex from "./component/Admin/AdminIndex";

function App() {
  const location = useLocation();
  //const { role } = useRole();
  // const [isAdmin, setIsAdmin] = useState(true);
  const isLoginPage =  location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/admin";

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


        {isLoginPage ? "" : ""}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/admin" element={isAdmin ? <AdminLayout><AdminIndex /></AdminLayout> : <Navigate to="/login" />} /> */}

        <Route path="/admin" element={<AdminLayout><AdminIndex /></AdminLayout>} />

        <Route path="/about" element={<UserLayout><About titile={"anil"} /> </UserLayout>} />
         <Route path="/contact" element={<UserLayout><Contact /></UserLayout>} />

         <Route path="/shop" element={<UserLayout><Shop /></UserLayout>} />
         <Route path="/blogs" element={<UserLayout><Blogs /></UserLayout>} />

         <Route path="/blogsDetails" element={<UserLayout><BlogsDetails /></UserLayout>} />
         <Route path="/cart" element={<UserLayout><Cart /></UserLayout>} />

         <Route path="/checkout" element={<UserLayout><Checkout /></UserLayout>} />
         <Route path="/faq" element={<UserLayout><Faq /></UserLayout>} />

         <Route path="/shopDetails" element={<UserLayout><ShopDetails /></UserLayout>} />
         <Route path="/indexPage" element={<UserLayout><IndexPage /></UserLayout>} />

         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/" element={<UserLayout><Indexpage2 /></UserLayout>} />

        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogsDetails" element={<BlogsDetails />} />
        <Route path="/" element={isAdmin ? <Navigate to="/admin" /> : <UserLayout><UserHome /></UserLayout>} /> */}
      </Routes>
      {/* {isLoginPage ? "" : <Footer />} */}
     
    </>

    // <>
    //     {isLoginPage ? "" : <Header />}
    //   {/* <Header /> */}
    //   <Routes>
    //     <Route path="/about" element={<About titile={"anil"} />} />
    //     <Route path="/contact" element={<Contact />} />

    //     <Route path="/shop" element={<Shop />} />
    //     <Route path="/blogs" element={<Blogs />} />

    //     <Route path="/blogsDetails" element={<BlogsDetails />} />
    //     <Route path="/cart" element={<Cart />} />

    //     <Route path="/checkout" element={<Checkout />} />
    //     <Route path="/faq" element={<Faq />} />

    //     <Route path="/shopDetails" element={<ShopDetails />} />
    //     <Route path="/indexPage" element={<IndexPage />} />

    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/" element={<Indexpage2 />} />
    //   </Routes>
    //   {/* <Footer /> */}
    //   {isLoginPage ? "" : <Footer />}
    // </>
  );
}

export default App;

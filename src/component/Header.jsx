import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      {/* // <!-- ===  Search Header Main  === --> */}
<div className="search-header-main">
    <div className="container">
         {/* Search Header Inner   */}
        <div className="search-header-inner">
            {/* <!--=== Site Branding  ===--> */}
            <div className="site-branding">
                <Link to="/" className="brand-logo"><img src="/src/assets/images/logo/logo-main.png" alt="Logo" /></Link>
            </div>
            {/* <!--===  Product Search Category  ===--> */}
            <div className="product-search-category">
                <form action="#">
                    <select className="wide" style={{display: 'none'}}>
                        <option>All Categories</option>
                        <option>Man Shirts</option>
                        <option>Denim Jeans</option>
                        <option>Casual Suit</option>
                        <option>Summer Dress</option>
                        <option>Sweaters</option>
                        <option>Jackets</option>
                    </select><div className="nice-select wide" tabIndex="0"><span className="current">All Categories</span><ul className="list"><li data-value="All Categories" className="option selected">All Categories</li><li data-value="Man Shirts" className="option">Man Shirts</li><li data-value="Denim Jeans" className="option">Denim Jeans</li><li data-value="Casual Suit" className="option">Casual Suit</li><li data-value="Summer Dress" className="option">Summer Dress</li><li data-value="Sweaters" className="option">Sweaters</li><li data-value="Jackets" className="option">Jackets</li></ul></div>
                    <div className="form-group">
                        <input type="text" placeholder="Enter Search Products" />
                        <button className="search-btn"><i className="far fa-search"></i></button>
                    </div>
                </form>
            </div>
            {/* <!--===  Hotline Support  ===--> */}
            <div className="hotline-support item-rtl">
                <div className="icon">
                    <i className="flaticon-support"></i>
                </div>
                <div className="info">
                    <span>24/7 Support</span>
                    <h5><Link to="tel:+941234567894">+94 123 4567 894</Link></h5>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!--===  Header Navigation  ===--> */}
<div className="header-navigation style-one">
    <div className="container">
        {/* <!--=== Primary Menu ===--> */}
        <div className="primary-menu">
            <div className="site-branding d-lg-none d-block">
                <Link to="/" className="brand-logo"><img src="/src/assets/images/logo/logo-main.png" alt="Logo" /></Link>
            </div>
            {/* <!--=== Nav Inner Menu ===--> */}
            <div className="nav-inner-menu">
                {/* <!--=== Main Category ===--> */}
                <div className="main-categories-wrap d-none d-lg-block">
                    <Link className="categories-btn-active" to="/">
                        <span className="fas fa-list"></span><span className="text">Products Category<i className="fas fa-angle-down"></i></span>
                    </Link>
                    <div className="categories-dropdown-wrap categories-dropdown-active">
                        <div className="categori-dropdown-item">
                            <ul>
                                <li>
                                    <Link to="/shop"> <img src="/src/assets/images/icon/shirt.png" alt="Shirts" />Man Shirts</Link>
                                </li>
                                <li>
                                    <Link to="/shop"> <img src="/src/assets/images/icon/denim.png" alt="Jeans" />Denim Jeans</Link>
                                </li>
                                <li>
                                    <Link to="/shop"> <img src="/src/assets/images/icon/suit.png" alt="Suit" />Casual Suit</Link>
                                </li>
                                <li>
                                    <Link to="/shop"> <img src="/src/assets/images/icon/dress.png" alt="Dress" />Summer Dress</Link>
                                </li>
                                <li>
                                    <Link to="/shop"> <img src="/src/assets/images/icon/sweaters.png" alt="Sweaters" />Sweaters</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="more_slide_open" style={{display: 'none'}}>
                            <div className="categori-dropdown-item">
                                <ul>
                                    <li>
                                        <Link to="#"><img src="/src/assets/images/icon/jacket.png" alt="Jackets" />Jackets</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="more_categories"><span className="icon"></span> <span>Show more...</span></div>
                    </div>
                </div>
                {/* <!--=== Pesco Nav Main ===--> */}
                <div className="pesco-nav-main">
                    {/* <!--=== Pesco Nav Menu ===--> */}
                    <div className="pesco-nav-menu">
                        {/* <!--=== Responsive Menu Search ===--> */}
                        <div className="nav-search mb-40 d-block d-lg-none">
                            <div className="form-group">
                                <input type="search" className="form_control" placeholder="Search Here" name="search" />
                                <button className="search-btn"><i className="far fa-search"></i></button>
                            </div>
                        </div>
                        {/* <!--=== Responsive Menu Tab ===--> */}
                        <div className="pesco-tabs style-three d-block d-lg-none">
                            <ul className="nav nav-tabs mb-30" role="tablist">
                                <li>
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav1" role="tab" aria-selected="true">Menu</button>
                                </li>
                                <li>
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav2" role="tab" aria-selected="false" tabIndex="-1" >Category</button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="nav1" role="tabpanel">
                                    <nav className="main-menu">
                                        <ul>
                                            <li className="menu-item has-children"><Link to="#">Home<span className="dd-trigger"><i className="far fa-angle-down"></i></span></Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/">Home 01</Link></li>
                                                    <li><Link to="/indexPage">Home 02</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item has-children"><Link to="#">Shop<span className="dd-trigger"><i className="far fa-angle-down"></i></span></Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/shop">Our Shop</Link></li>
                                                    <li><Link to="/shopDetails">Product Details</Link></li>
                                                    <li><Link to="/cart">Cart</Link></li>
                                                    <li><Link to="/checkout">Checkout</Link></li>
                                                    {/* <li><Link to="wishlists.html">Wishlist</Link></li> */}
                                                </ul>
                                            </li>
                                            <li className="menu-item has-children"><Link to="#">Blog<span className="dd-trigger"><i className="far fa-angle-down"></i></span></Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/blogs">Our Blog</Link></li>
                                                    <li><Link to="/blogsDetails">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item has-children"><Link to="#">Pages<span className="dd-trigger"><i className="far fa-angle-down"></i></span></Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/about">About Us</Link></li>
                                                    <li><Link to="/faq">Faqs</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item"><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="tab-pane fade" id="nav2" role="tabpanel">
                                    <div className="categori-dropdown-item">
                                        <ul>
                                            <li>
                                                <Link to="/shop"> <img src="/src/assets/images/icon/shirt.png" alt="Shirts" />Man Shirts</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/src/assets/images/icon/denim.png" alt="Jeans" />Denim Jeans</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/src/assets/images/icon/suit.png" alt="Suit" />Casual Suit</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/src/assets/images/icon/dress.png" alt="Dress" />Summer Dress</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/src/assets/images/icon/sweaters.png" alt="Sweaters" />Sweaters</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--===  Hotline Support  ===--> */}
                        <div className="hotline-support d-flex d-lg-none mt-30">
                            <div className="icon">
                                <i className="flaticon-support"></i>
                            </div>
                            <div className="info">
                                <span>24/7 Support</span>
                                <h5><Link to="tel:+941234567894">+94 123 4567 894</Link></h5>
                            </div>
                        </div>
                        {/* <!--=== Main Menu ===--> */}
                        <nav className="main-menu d-none d-lg-block">
                            <ul>
                                <li className="menu-item has-children"><Link to="#">Home<span className="dd-trigger"><i className="far fa-angle-down"></i></span></Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/">Home 01</Link></li>
                                        <li><Link to="/indexPage">Home 02</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item has-children"><Link to="#">Shop<span className="dd-trigger"><i className="far fa-angle-down"></i></span></Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/shop">Our Shop</Link></li>
                                        <li><Link to="/shopDetails">Product Details</Link></li>
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                        {/* <li><Link to="wishlists.html">Wishlist</Link></li> */}
                                    </ul>
                                </li>
                                <li className="menu-item has-children"><Link to="#">Blog<span className="dd-trigger"><i className="far fa-angle-down"></i></span></Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/blogs">Our Blog</Link></li>
                                        <li><Link to="/blogsDetails">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item has-children"><Link to="#">Pages<span className="dd-trigger"><i className="far fa-angle-down"></i></span></Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/faq">Faqs</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!--=== Nav Right Item ===--> */}
            <div className="nav-right-item style-one">
                <ul>
                    <li>
                        <div className="deals d-lg-block d-none"><i className="far fa-fire-alt"></i>Deal</div>
                    </li>
                    <li>
                        <div className="wishlist-btn d-lg-block d-none"><i className="far fa-heart"></i><span className="pro-count">12</span></div>
                    </li>
                    <li>
                        <div className="cart-button d-flex align-items-center">
                            <div className="icon">
                                <i className="fas fa-shopping-bag"></i><span className="pro-count">01</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="navbar-toggler d-block d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

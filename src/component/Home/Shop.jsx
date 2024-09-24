
export default function Shop() {
  return (
    <div>
      <section className="page-banner">
                <div className="page-banner-wrapper p-r z-1">
                    <svg className="lineanm" viewBox="0 0 1920 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="line" d="M-39 345.187C70 308.353 397.628 293.477 436 145.186C490 -63.5 572 -57.8156 688 255.186C757.071 441.559 989.5 -121.315 1389 98.6856C1708.6 274.686 1940.33 156.519 1964.5 98.6856" stroke="white" strokeWidth="3" strokeDasharray="2 2"></path>
                    </svg>
                    <div className="page-image"><img src="/src/assets/images/bg/page-img-1.png" alt="image" /></div>
                    <div className="page-svg"><img src="/src/assets/images/bg/page-shape.png" alt="Shape" /></div>
                    <div className="shape shape-one"><span></span></div>
                    <div className="shape shape-two"><span></span></div>
                    <div className="shape shape-three"><span><img src="/src/assets/images/shape/curved-arrow.png" alt="" /></span></div>
                    <div className="shape shape-four"><span><img src="/src/assets/images/shape/stars.png" alt="" /></span></div>                
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="page-banner-content">
                                    <h1>Shop Page</h1>
                                    <ul className="breadcrumb-link">
                                        <li><a href="index.html">Home</a></li>
                                        <li><i className="far fa-long-arrow-right"></i></li>
                                        <li className="active">Shop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop-page-section pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            {/*<!--=== Sidebar Area ===-->*/}
                            <div className="shop-sidebar-area">
                                {/*<!--=== Product Widget ===-->*/}
                                <div className="product-widget product-categories-widget mb-40">
                                    <div className="widget-content">
                                        <h4 className="widget-title">Product Categories</h4>
                                        <ul className="categories-list">
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="check1" />
                                                    <label className="form-check-label" htmlFor="check1">
                                                        Womens Clothing<span>45</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="check2" />
                                                    <label className="form-check-label" htmlFor="check2">
                                                        Mens Clothing<span>40</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="check3" />
                                                    <label className="form-check-label" htmlFor="check3">
                                                        Formal Wear<span>35</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="check4" />
                                                    <label className="form-check-label" htmlFor="check4">
                                                        Footwear<span>59</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="check5" />
                                                    <label className="form-check-label" htmlFor="check5">
                                                        Accessories<span>74</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="check6" />
                                                    <label className="form-check-label" htmlFor="check6">
                                                        Maternity Wear<span>87</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="check7" />
                                                    <label className="form-check-label" htmlFor="check7">
                                                        Vintage Clothing<span>45</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="check8" />
                                                    <label className="form-check-label" htmlFor="check8">
                                                        Streetwear<span>88</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="check9" />
                                                    <label className="form-check-label" htmlFor="check9">
                                                        Swimwear<span>19</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*<!--=== Sidebar Widget ===-->*/}
                                <div className="product-widget price-filter-widget mb-40 wow fadeInUp">
                                    <div className="widget-content">
                                        <h4 className="widget-title">Price Filter</h4>
                                        <div className="price-number">
                                            <ul>
                                                <li><input type="text" id="amount" /></li>
                                            </ul>
                                        </div>
                                        <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: "9.5%", width: "60.5%"}}></div><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: "9.5%"}}></span><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: "70%"}}></span></div>
                                    </div>
                                </div>
                                {/*<!--=== Sidebar Widget ===-->*/}
                                <div className="product-widget product-categories-widget mb-40">
                                    <div className="widget-content">
                                        <h4 className="widget-title">Brands</h4>
                                        <ul className="categories-list">
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="br_check1" />
                                                    <label className="form-check-label" htmlFor="br_check1">
                                                        Nike<span>19</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="br_check2" />
                                                    <label className="form-check-label" htmlFor="br_check2">
                                                        Zara<span>55</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="br_check3" />
                                                    <label className="form-check-label" htmlFor="br_check3">
                                                        Denim<span>74</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="br_check4" />
                                                    <label className="form-check-label" htmlFor="br_check4">
                                                        Madame<span>12</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="br_check5" />
                                                    <label className="form-check-label" htmlFor="br_check5">
                                                        Max Mall<span>45</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="br_check6" />
                                                    <label className="form-check-label" htmlFor="br_check6">
                                                        BAGGIE<span>45</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="br_check7" />
                                                    <label className="form-check-label" htmlFor="br_check7">
                                                        Kolam<span>74</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="br_check8" />
                                                    <label className="form-check-label" htmlFor="br_check8">
                                                        Sketcen<span>19</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*<!--=== Sidebar Widget ===-->*/}
                                <div className="product-widget product-size-widget mb-30">
                                    <div className="widget-content">
                                        <h4 className="widget-title">Size</h4>
                                        <ul className="size-list">
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radio" value="Slim Fit" id="size1" />
                                                    <label className="form-check-label" htmlFor="size1">
                                                        Slim Fit
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radio" value="Slim Fit" id="size2" />
                                                    <label className="form-check-label" htmlFor="size2">
                                                        S
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radio" value="Slim Fit" id="size3" />
                                                    <label className="form-check-label" htmlFor="size3">
                                                        M
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radio" value="Slim Fit" id="size4" />
                                                    <label className="form-check-label" htmlFor="size4">
                                                        L
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radio" value="Slim Fit" id="size5" />
                                                    <label className="form-check-label" htmlFor="size5">
                                                        XL
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radio" value="Slim Fit" id="size6" />
                                                    <label className="form-check-label" htmlFor="size6">
                                                        2XL
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radio" value="Slim Fit" id="size7" />
                                                    <label className="form-check-label" htmlFor="size7">
                                                        XXL
                                                    </label>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                {/*<!--=== Sidebar Widget ===-->*/}
                                <div className="sidebar-banner-widget mb-40">
                                    <div className="banner-widget-content">
                                        <div className="banner-shape"><img src="/src/assets/images/widget/banner-shape-1.png" alt="shape" /></div>
                                        <div className="banner-img"><img src="/src/assets/images/widget/banner-1.png" alt="image" /></div>
                                        <div className="content">
                                            <span className="sale">BIG SALE</span>
                                            <h3>40% <span>off Each Products</span></h3>
                                            <a href="shops.html" className="theme-btn style-one">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            {/*<!--=== Shop Page Wrapper ===-->*/}
                            <div className="shop-page-wrapper">
                                {/*<!--=== Shop Filter ===-->*/}
                                <div className="shop-filter mb-60">
                                    <div className="row align-items-center">
                                        <div className="col-sm-5 col-12">
                                            <div className="show-text">
                                                <p><span>Showing</span>01-16 of 66 Results</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-2 col-4">
                                            <div className="filter-grid-list text-center">
                                                <a href="#"><i className="far fa-th"></i></a>
                                                <a href="#"><i className="far fa-list"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-sm-5 col-8">
                                            <div className="filter-product-category d-flex align-items-center">
                                                <h5>Sort By:</h5>
                                                <select className="wide" style={{display: "none"}}>
                                                    <option>Default</option>
                                                    <option>Sort by Newness</option>
                                                    <option>Price High To Low</option>
                                                    <option>Price Low To High</option>
                                                </select><div className="nice-select wide" tabIndex="0"><span className="current">Default</span><ul className="list"><li data-value="Default" className="option selected">Default</li><li data-value="Sort by Newness" className="option">Sort by Newness</li><li data-value="Price High To Low" className="option">Price High To Low</li><li data-value="Price Low To High" className="option">Price Low To High</li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-one mb-40">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-2.png" alt="Products" />
                                                <div className="discount">10% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                                <div className="cart-button">
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i> <span className="text">Add To Cart</span></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <ul className="ratings rating5">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><a href="#">(65)</a></li>
                                                    </ul>
                                                    <h4 className="title"><a href="shop-details.html">Lightweight linen summer dress with belt</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price prev-price"><span className="currency">$</span>80.00</span>
                                                    <span className="price new-price"><span className="currency">$</span>40.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-one mb-40">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-1.png" alt="Products" />
                                                <div className="discount">10% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-1.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                                <div className="cart-button">
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i> <span className="text">Add To Cart</span></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <ul className="ratings rating5">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><a href="#">(20)</a></li>
                                                    </ul>
                                                    <h4 className="title"><a href="shop-details.html">Cozy knit sweater with pockets</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price prev-price"><span className="currency">$</span>50.00</span>
                                                    <span className="price new-price"><span className="currency">$</span>20.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-one mb-40">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-4.png" alt="Products" />
                                                <div className="discount">10% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-4.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                                <div className="cart-button">
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i> <span className="text">Add To Cart</span></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <ul className="ratings rating5">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><a href="#">(36)</a></li>
                                                    </ul>
                                                    <h4 className="title"><a href="shop-details.html">Athletic leggings with mesh panels</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price prev-price"><span className="currency">$</span>70.00</span>
                                                    <span className="price new-price"><span className="currency">$</span>40.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-one mb-40">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/product-1.png" alt="Products" />
                                                <div className="discount">10% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="/src/assets/images/products/product-1.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                                <div className="cart-button">
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i> <span className="text">Add To Cart</span></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <ul className="ratings rating5">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><a href="#">(33)</a></li>
                                                    </ul>
                                                    <h4 className="title"><a href="shop-details.html">Classic leather biker jacket with zippers</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price prev-price"><span className="currency">$</span>85.00</span>
                                                    <span className="price new-price"><span className="currency">$</span>35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-one mb-40">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/product-2.png" alt="Products" />
                                                <div className="discount">10% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="/src/assets/images/products/product-2.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                                <div className="cart-button">
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i> <span className="text">Add To Cart</span></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <ul className="ratings rating5">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><a href="#">(15)</a></li>
                                                    </ul>
                                                    <h4 className="title"><a href="shop-details.html">Floral print sundress with adjustable straps</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price prev-price"><span className="currency">$</span>67.00</span>
                                                    <span className="price new-price"><span className="currency">$</span>26.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-one mb-40">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/product-3.png" alt="Products" />
                                                <div className="discount">10% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="/src/assets/images/products/product-3.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                                <div className="cart-button">
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i> <span className="text">Add To Cart</span></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <ul className="ratings rating5">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><a href="#">(30)</a></li>
                                                    </ul>
                                                    <h4 className="title"><a href="shop-details.html">Relaxed fit denim jeans with distressing</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price prev-price"><span className="currency">$</span>50.00</span>
                                                    <span className="price new-price"><span className="currency">$</span>30.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-one mb-40">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-3.png" alt="Products" />
                                                <div className="discount">10% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-3.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                                <div className="cart-button">
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i> <span className="text">Add To Cart</span></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <ul className="ratings rating5">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><a href="#">(45)</a></li>
                                                    </ul>
                                                    <h4 className="title"><a href="shop-details.html">Cargo shorts with pockets and drawstring</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price prev-price"><span className="currency">$</span>40.00</span>
                                                    <span className="price new-price"><span className="currency">$</span>20.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-one mb-40">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/product-4.png" alt="Products" />
                                                <div className="discount">10% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="/src/assets/images/products/product-4.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                                <div className="cart-button">
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i> <span className="text">Add To Cart</span></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <ul className="ratings rating5">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><a href="#">(80)</a></li>
                                                    </ul>
                                                    <h4 className="title"><a href="shop-details.html">Elegant silk dress with sequins</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price prev-price"><span className="currency">$</span>89.00</span>
                                                    <span className="price new-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-one mb-40">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/product-5.png" alt="Products" />
                                                <div className="discount">10% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="/src/assets/images/products/product-5.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                                <div className="cart-button">
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i> <span className="text">Add To Cart</span></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <ul className="ratings rating5">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><a href="#">(80)</a></li>
                                                    </ul>
                                                    <h4 className="title"><a href="shop-details.html">Cashmere v-neck sweater with ribbed cuffs</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price prev-price"><span className="currency">$</span>56.00</span>
                                                    <span className="price new-price"><span className="currency">$</span>07.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="pesco-pagination mb-40">
                                            <ul>
                                                <li><a href="#"><i className="far fa-angle-left"></i></a></li>
                                                <li><a href="#">01</a></li>
                                                <li><a href="#">02</a></li>
                                                <li><a href="#">....</a></li>
                                                <li><a href="#">20</a></li>
                                                <li><a href="#"><i className="far fa-angle-right"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newsletter-section pb-95">
                <div className="container">
                    {/*<!--=== Newsletter Wrapper  ===-->*/}
                    <div className="newsletter-wrapper white-bg p-r z-1">
                        <div className="newsletter-shape pattern-one"><span><img src="/src/assets/images/newsletter/pattern-1.png" alt="Pattern Shape" /></span></div>
                        <div className="newsletter-shape pattern-two"><span><img src="/src/assets/images/newsletter/pattern-2.png" alt="Pattern Shape" /></span></div>
                        <div className="newsletter-shape shape-one"><span><img src="/src/assets/images/newsletter/shape-1.png" alt="Shape" /></span></div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="newsletter-content-box">
                                    <span className="sub-text">Our Newsletter</span>
                                    <h3>Get weekly update. Sign up and get up to <span>20% off</span> your first purchase</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form_control" placeholder="Write your Email Address" name="email" />
                                            <button className="theme-btn style-one">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="newsletter-image">
                                    <img src="/src/assets/images/newsletter/newsletter-1.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

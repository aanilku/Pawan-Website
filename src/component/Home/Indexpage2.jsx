
export default function Indexpage2() {
  return (
    <div>
          {/*<!--====== Main Bg  ======-->*/}
        <main className="main-bg">
        
            {/*<!--====== Start Hero Section ======-->*/}
            <section className="hero-section">
                {/*<!--=== Hero Wrapper ===-->*/}
                <div className="hero-wrapper-two">
                    {/*<!--=== Hero shape ===-->*/}
                    <div className="hero-shape bg_cover d-none d-xl-block" style={{backgroundImage: "url(assets/images/hero/hero-two-shape1.png)"}}></div>
                    {/*<!--=== Hero Image ===-->*/}
                    <div className="hero-image d-none d-xl-block">
                        <img src="/src/assets/images/hero/hero-two_img1.jpg" alt="Hero Image" />
                        <div className="hero-img-shape"><img src="/src/assets/images/hero/hero-two-img-shape1.png" alt="Image Shape" /></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                {/*<!--=== hero Post Slider ===-->*/}
                                <div className="hero-post-slider mb-100">
                                    {/*<!--=== Single Post Slider ===-->*/}
                                    <div className="single-hero-post">
                                        <div className="hero-content style-two">
                                            <span className="tag-line"><i className="flaticon-star-2"></i><b>Best for your categories</b><i className="flaticon-star-2"></i></span>
                                            <h1><span>Get 20% Off</span> Women Cloth Collections</h1>
                                            <p>Enjoy 20% off on our entire Women’s Clothing Collection! Discover stylish outfits for every occasion and save on your favorite pieces. </p>
                                            <a href="shops.html" className="theme-btn style-one">Shop Now</a>
                                        </div>
                                    </div>
                                 
                                </div>
                                {/*<!--=== Hero Dots ===-->*/}
                                <div className="hero-dots"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--====== End Hero Section ======-->*/}
            {/*<!--===== Start Banner Section  ======-->*/}
            <section className="banner-promo-section pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/*<!--=== Section Title  ===-->*/}
                            <div className="section-title text-center mb-60">
                                <div className="sub-heading d-inline-flex align-items-center">
                                    <i className="flaticon-sparkler"></i>
                                    <span className="sub-title">New Collection</span>
                                    <i className="flaticon-sparkler"></i>
                                </div>
                                <h2>Shop New Collection</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*<!--=== Banner Item  ===-->*/}
                        <div className="col-xl-5">
                            <div className="banner-item style-two mb-40 bg_cover" style={{backgroundImage: "url(assets/images/banner/banner-bg1.jpg)"}}>
                                <div className="banner-img"><img src="/src/assets/images/banner/banner-img1.png" alt="banner image" /></div>
                                <div className="banner-content">
                                    <span>Up to 40% Off</span>
                                    <h4>Shop new Collection For Women</h4>
                                    <div className="separator"></div>
                                    <a href="shops.html" className="theme-btn style-two">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            {/*<!--=== Banner Item  ===-->*/}
                            <div className="banner-item style-three mb-40 bg_cover" style={{backgroundImage: "url(assets/images/banner/banner-bg2.jpg)"}}>
                                <div className="banner-img"><img src="/src/assets/images/banner/banner-img2.png" alt="banner image" /></div>
                                <div className="banner-content">
                                    <span>45% Off</span>
                                    <div className="separator"></div>
                                    <h4>Discover the Latest 
                                        Womens Collection</h4>
                                    <a href="shops.html" className="theme-btn style-one">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            {/*<!--=== Banner Item  ===-->*/}
                            <div className="banner-item style-three mb-40 bg_cover" style={{backgroundImage: "url(assets/images/banner/banner-bg3.jpg)"}}>
                                <div className="banner-img"><img src="/src/assets/images/banner/banner-img3.png" alt="banner image" /></div>
                                <div className="banner-content">
                                    <span>35% Off</span>
                                    <div className="separator"></div>
                                    <h4>Explore Fresh Arrivals 
                                        in Women’s Fashion</h4>
                                    <a href="shops.html" className="theme-btn style-one">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            {/*<!--=== Banner Item  ===-->*/}
                            <div className="banner-item style-two mb-40 bg_cover" style={{backgroundImage: "url(assets/images/banner/banner-bg4.jpg)"}}>
                                <div className="banner-img"><img src="/src/assets/images/banner/banner-img4.png" alt="banner image" /></div>
                                <div className="banner-content">
                                    <span>Up to 40% Off</span>
                                    <h4>Unveil New Trends in Womens Clothing</h4>
                                    <div className="separator"></div>
                                    <a href="shops.html" className="theme-btn style-two">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--===== End Banner Section  ======-->*/}
            {/*<!--===== Start Category Section  ======-->*/}
            <section className="category-section pt-90 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {/*<!--=== Section Title  ===-->*/}
                            <div className="section-title mb-60">
                                <div className="sub-heading d-inline-flex align-items-center">
                                    <i className="flaticon-sparkler"></i>
                                    <span className="sub-title">Categories</span>
                                </div>
                                <h2>Browse Top Category</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            {/*<!--=== Category Button  ===-->*/}
                            <div className="category-button float-md-end">
                                <a href="#" className="theme-btn style-one">View All <i className="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/*<!--====== Start Category Wrapper ======-->*/}
                    <div className="category-wrapper pt-80">
                        <div className="row justify-content-center"> 
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                {/*<!--=== Category Item  ===-->*/}
                                <div className="category-item style-two mb-110">
                                    <div className="category-img">
                                        <img src="/src/assets/images/category/category-7.jpg" alt="Category Thumbnail" />
                                    </div>
                                    <div className="category-content">
                                        <a href="index.html" className="category-btn">Man Shirts</a>
                                        <span>10 items</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                {/*<!--=== Category Item  ===-->*/}
                                <div className="category-item style-two mb-110">
                                    <div className="category-img">
                                        <img src="/src/assets/images/category/category-8.jpg" alt="Category Thumbnail" />
                                    </div>
                                    <div className="category-content">
                                        <a href="index.html" className="category-btn">Denim Jeans</a>
                                        <span>45 items</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                {/*<!--=== Category Item  ===-->*/}
                                <div className="category-item style-two mb-110">
                                    <div className="category-img">
                                        <img src="/src/assets/images/category/category-9.jpg" alt="Category Thumbnail" />
                                    </div>
                                    <div className="category-content">
                                        <a href="index.html" className="category-btn">Casual Suit</a>
                                        <span>30 items</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                {/*<!--=== Category Item  ===-->*/}
                                <div className="category-item style-two mb-110">
                                    <div className="category-img">
                                        <img src="/src/assets/images/category/category-10.jpg" alt="Category Thumbnail" />
                                    </div>
                                    <div className="category-content">
                                        <a href="index.html" className="category-btn">Summer Dress</a>
                                        <span>36 items</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                {/*<!--=== Category Item  ===-->*/}
                                <div className="category-item style-two mb-110">
                                    <div className="category-img">
                                        <img src="/src/assets/images/category/category-11.jpg" alt="Category Thumbnail" />
                                    </div>
                                    <div className="category-content">
                                        <a href="index.html" className="category-btn">Sweaters</a>
                                        <span>24 items</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                {/*<!--=== Category Item  ===-->*/}
                                <div className="category-item style-two mb-110">
                                    <div className="category-img">
                                        <img src="/src/assets/images/category/category-12.jpg" alt="Category Thumbnail" />
                                    </div>
                                    <div className="category-content">
                                        <a href="index.html" className="category-btn">Jackets</a>
                                        <span>06 items</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--===== End Category Section  ======-->*/}
            {/*<!--===== Start Features Section  ======-->*/}
            <section className="features-products-section pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/*<!--=== Section Title  ===-->*/}
                            <div className="section-title text-center mb-60">
                                <div className="sub-heading d-inline-flex align-items-center">
                                    <i className="flaticon-sparkler"></i>
                                    <span className="sub-title">Feature Products</span>
                                    <i className="flaticon-sparkler"></i>
                                </div>
                                <h2>Our Features Collection</h2>
                            </div>
                        </div>
                    </div>
                    <div className="products-item-wrapper">
                        {/*<!--=== Product Item  ===-->*/}
                        <div className="product-item style-three">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-5.png" alt="Products" />
                                <div className="discount">20% Off</div>
                                <div className="hover-content">
                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                    <a href="/src/assets/images/products/feature-product-5.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-info-wrap">
                                <div className="product-info">
                                    <div className="product-meta d-flex">
                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                        <ul className="ratings rating4">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Product Item  ===-->*/}
                        <div className="product-item style-three">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-6.png" alt="Products" />
                                <div className="hover-content">
                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                    <a href="/src/assets/images/products/feature-product-6.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-info-wrap">
                                <div className="product-info">
                                    <div className="product-meta d-flex">
                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                        <ul className="ratings rating4">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Product Item  ===-->*/}
                        <div className="product-item style-three">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-7.png" alt="Products" />
                                <div className="discount">20% Off</div>
                                <div className="hover-content">
                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                    <a href="/src/assets/images/products/feature-product-7.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-info-wrap">
                                <div className="product-info">
                                    <div className="product-meta d-flex">
                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                        <ul className="ratings rating4">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Product Item  ===-->*/}
                        <div className="product-item style-three">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-8.png" alt="Products" />
                                <div className="hover-content">
                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                    <a href="/src/assets/images/products/feature-product-8.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-info-wrap">
                                <div className="product-info">
                                    <div className="product-meta d-flex">
                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                        <ul className="ratings rating4">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Product Item  ===-->*/}
                        <div className="product-item style-three">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-9.png" alt="Products" />
                                <div className="hover-content">
                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                    <a href="/src/assets/images/products/feature-product-9.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-info-wrap">
                                <div className="product-info">
                                    <div className="product-meta d-flex">
                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                        <ul className="ratings rating4">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Product Item  ===-->*/}
                        <div className="product-item style-three">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-10.png" alt="Products" />
                                <div className="discount">20% Off</div>
                                <div className="hover-content">
                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                    <a href="/src/assets/images/products/feature-product-10.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-info-wrap">
                                <div className="product-info">
                                    <div className="product-meta d-flex">
                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                        <ul className="ratings rating4">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Product Item  ===-->*/}
                        <div className="product-item style-three">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-11.png" alt="Products" />
                                <div className="hover-content">
                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                    <a href="/src/assets/images/products/feature-product-11.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-info-wrap">
                                <div className="product-info">
                                    <div className="product-meta d-flex">
                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                        <ul className="ratings rating4">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Product Item  ===-->*/}
                        <div className="product-item style-three">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-12.png" alt="Products" />
                                <div className="hover-content">
                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                    <a href="/src/assets/images/products/feature-product-12.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-info-wrap">
                                <div className="product-info">
                                    <div className="product-meta d-flex">
                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                        <ul className="ratings rating4">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Product Item  ===-->*/}
                        <div className="product-item style-three">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-13.png" alt="Products" />
                                <div className="discount">20% Off</div>
                                <div className="hover-content">
                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                    <a href="/src/assets/images/products/feature-product-13.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-info-wrap">
                                <div className="product-info">
                                    <div className="product-meta d-flex">
                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                        <ul className="ratings rating4">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Product Item  ===-->*/}
                        <div className="product-item style-three">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-14.png" alt="Products" />
                                <div className="discount">20% Off</div>
                                <div className="hover-content">
                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                    <a href="/src/assets/images/products/feature-product-14.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-info-wrap">
                                <div className="product-info">
                                    <div className="product-meta d-flex">
                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                        <ul className="ratings rating4">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--===== End Features Section  ======-->*/}
            {/*<!--=== Start Deals Section  ===-->*/}
            <section className="today-deals-section white-bg pb-130 pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {/*<!--=== Section Title  ===-->*/}
                            <div className="section-title mb-50">
                                <div className="sub-heading d-inline-flex align-items-center">
                                    <i className="flaticon-sparkler"></i>
                                    <span className="sub-title">Today Deals</span>
                                </div>
                                <h2>Hurry Up. offer in End</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            {/*<!--=== Today deals Arrow  ===-->*/}
                            <div className="today-deals-arrows style-one mb-60"></div>
                        </div>
                    </div>
                </div>
                {/*<!--=== Today deals Slider  ===-->*/}
                <div className="today-deals-slider">
                    {/*<!--=== Product Item  ===-->*/}
                    <div className="product-item style-four">
                        <div className="product-thumbnail">
                            <img src="/src/assets/images/products/deal-1.png" alt="Products" />
                        </div>
                        <div className="product-info-wrap">
                            <div className="product-info">
                                <div className="product-meta d-flex">
                                    <span>Brand: <a href="#">SOFOLI</a></span>
                                    <ul className="ratings rating4">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                            </div>
                            <div className="product-countdown">
                                <div className="simply-countdown"></div>
                            </div>
                            <div className="product-price">
                                <span className="price new-price"><span className="currency">$</span>15.60</span>
                                <span className="price prev-price"><span className="currency">$</span>34.00</span>
                            </div>
                        </div>
                    </div>
                    {/*<!--=== Product Item  ===-->*/}
                    <div className="product-item style-four">
                        <div className="product-thumbnail">
                            <img src="/src/assets/images/products/deal-2.png" alt="Products" />
                        </div>
                        <div className="product-info-wrap">
                            <div className="product-info">
                                <div className="product-meta d-flex">
                                    <span>Brand: <a href="#">SOFOLI</a></span>
                                    <ul className="ratings rating4">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                            </div>
                            <div className="product-countdown">
                                <div className="simply-countdown"></div>
                            </div>
                            <div className="product-price">
                                <span className="price new-price"><span className="currency">$</span>15.60</span>
                                <span className="price prev-price"><span className="currency">$</span>34.00</span>
                            </div>
                        </div>
                    </div>
                    {/*<!--=== Product Item  ===-->*/}
                    <div className="product-item style-four">
                        <div className="product-thumbnail">
                            <img src="/src/assets/images/products/deal-3.png" alt="Products" />
                        </div>
                        <div className="product-info-wrap">
                            <div className="product-info">
                                <div className="product-meta d-flex">
                                    <span>Brand: <a href="#">SOFOLI</a></span>
                                    <ul className="ratings rating4">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                            </div>
                            <div className="product-countdown">
                                <div className="simply-countdown"></div>
                            </div>
                            <div className="product-price">
                                <span className="price new-price"><span className="currency">$</span>15.60</span>
                                <span className="price prev-price"><span className="currency">$</span>34.00</span>
                            </div>
                        </div>
                    </div>
                    {/*<!--=== Product Item  ===-->*/}
                    <div className="product-item style-four">
                        <div className="product-thumbnail">
                            <img src="/src/assets/images/products/deal-2.png" alt="Products" />
                        </div>
                        <div className="product-info-wrap">
                            <div className="product-info">
                                <div className="product-meta d-flex">
                                    <span>Brand: <a href="#">SOFOLI</a></span>
                                    <ul className="ratings rating4">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                            </div>
                            <div className="product-countdown">
                                <div className="simply-countdown"></div>
                            </div>
                            <div className="product-price">
                                <span className="price new-price"><span className="currency">$</span>15.60</span>
                                <span className="price prev-price"><span className="currency">$</span>34.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--=== End Deals Section  ===-->*/}
            {/*<!--===== Start Week Deal Section  ======-->*/}
            <section className="week-deal-section overflow-hidden pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            {/*<!--=== Week Deals Content ===-->*/}
                            <div className="week-deals-box mb-30">
                                <span className="sub-heading"><i className="fas fa-tags"></i>Deal of the Week</span>
                                <h2>UP TO 80% OFF</h2>
                                <p>Dont miss out on our biggest sale! Enjoy up to 80% off on a wide range of products.</p>
                                <div className="week-deals-countdown mb-30">
                                    <h5>Hurry Up! Offer ends in.  </h5>
                                    <div className="simply-countdown-two"></div>
                                </div>
                                <div className="shop-button">
                                    <a href="shops.html" className="theme-btn style-one">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            {/*<!--=== Week Top Product Slider ===-->*/}
                            <div className="weekly-top-product-slider">
                                {/*<!--=== Product Item ===-->*/}
                                <div className="product-item style-five mb-30">
                                    <div className="product-thumbnail">
                                        <img src="/src/assets/images/products/product-5.png" alt="product Thumbnail" />
                                        <div className="hover-content">
                                            <div className="product-info">
                                                <h4 className="title"><a href="shop-details.html">Women’s Georgette Traditional Stunning Outfit</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!--=== Product Item ===-->*/}
                                <div className="product-item style-five mb-30">
                                    <div className="product-thumbnail">
                                        <img src="/src/assets/images/products/product-6.png" alt="product Thumbnail" />
                                        <div className="hover-content">
                                            <div className="product-info">
                                                <h4 className="title"><a href="shop-details.html">Women’s Georgette Traditional Stunning Outfit</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!--=== Product Item ===-->*/}
                                <div className="product-item style-five mb-30">
                                    <div className="product-thumbnail">
                                        <img src="/src/assets/images/products/product-7.png" alt="product Thumbnail" />
                                        <div className="hover-content">
                                            <div className="product-info">
                                                <h4 className="title"><a href="shop-details.html">Women’s Georgette Traditional Stunning Outfit</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--===== End Week Deal Section  ======-->*/}
            {/*<!--===== Start Shop Products Section  ======-->*/}
            <section className="shop-products-section pt-125">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/*<!--=== Section Title  ===-->*/}
                            <div className="section-title mb-60">
                                <div className="sub-heading d-inline-flex align-items-center">
                                    <i className="flaticon-sparkler"></i>
                                    <span className="sub-title">Shop Prodcucts</span>
                                </div>
                                <h2>Our Shop all Products</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/*<!--=== Pesco Tabs ===-->*/}
                            <div className="pesco-tabs style-one mb-50">
                                <ul className="nav nav-tabs">
                                    <li>
                                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#cat1">Best Sellers</button>
                                    </li>
                                    <li>
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#cat2">New Products</button>
                                    </li>
                                    <li>
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#cat3">Sale Products</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/*<!--=== Tab Content ===-->*/}
                            <div className="tab-content">
                                {/*<!--=== Tab Pane  ===-->*/}
                                <div className="tab-pane fade show active" id="cat1">
                                    {/*<!--=== Product Item Wrapper  ===-->*/}
                                    <div className="products-item-wrapper">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-5.png" alt="Products" />
                                                <div className="discount">20% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-5.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-6.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-6.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Lightweight linen summer dress with belt</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>45.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>64.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-7.png" alt="Products" />
                                                <div className="discount">30% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-7.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">CARDIGO</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Classic leather biker jacket with zippers</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>05.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-11.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-11.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">PLOTO</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Adidas Sports With a slim design, a vibrant entertainment</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-8.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-18.html" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">CARDIGO</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Vintage wool peacoat (a type of short coat)</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>35.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>74.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-13.png" alt="Products" />
                                                <div className="discount">20% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-13.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">Lioness</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Sequins are shiny beads sewn on clothes</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-9.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-9.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SUAGAN</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Relaxed fit denim jeans with distressing </a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>25.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-10.png" alt="Products" />
                                                <div className="discount">30% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-10.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Vintage wool peacoat (a type of short coat)</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>44.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>66.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-12.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-12.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SUGAN</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Striped cotton t-shirt with crew neck (crew neck means)</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>34.00</span>
                                                    <span className="price prev-price"><span className="currency">$</span>44.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-14.png" alt="Products" />
                                                <div className="discount">20% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-14.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">Lioness</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Floral print sundress with adjustable straps</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>50.00</span>
                                                    <span className="price prev-price"><span className="currency">$</span>94.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!--=== Tab Pane  ===-->*/}
                                <div className="tab-pane fade" id="cat2">
                                    {/*<!--=== Product Item Wrapper  ===-->*/}
                                    <div className="products-item-wrapper">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-9.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-9.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SUAGAN</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Relaxed fit denim jeans with distressing </a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>25.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-5.png" alt="Products" />
                                                <div className="discount">20% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-5.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-6.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-6.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Lightweight linen summer dress with belt</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>45.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>64.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-7.png" alt="Products" />
                                                <div className="discount">30% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-7.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">CARDIGO</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Classic leather biker jacket with zippers</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>05.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-11.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-11.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">PLOTO</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Adidas Sports With a slim design, a vibrant entertainment</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-8.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-18.html" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">CARDIGO</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Vintage wool peacoat (a type of short coat)</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>35.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>74.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-13.png" alt="Products" />
                                                <div className="discount">20% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-13.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">Lioness</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Sequins are shiny beads sewn on clothes</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-10.png" alt="Products" />
                                                <div className="discount">30% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-10.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Vintage wool peacoat (a type of short coat)</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>44.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>66.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-12.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-12.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SUGAN</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Striped cotton t-shirt with crew neck (crew neck means)</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>34.00</span>
                                                    <span className="price prev-price"><span className="currency">$</span>44.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-14.png" alt="Products" />
                                                <div className="discount">20% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-14.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">Lioness</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Floral print sundress with adjustable straps</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>50.00</span>
                                                    <span className="price prev-price"><span className="currency">$</span>94.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!--=== Tab Pane  ===-->*/}
                                <div className="tab-pane fade" id="cat3">
                                    {/*<!--=== Product Item Wrapper  ===-->*/}
                                    <div className="products-item-wrapper">
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-11.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-11.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">PLOTO</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Adidas Sports With a slim design, a vibrant entertainment</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-5.png" alt="Products" />
                                                <div className="discount">20% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-5.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Cozy women knit sweater with pockets </a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-6.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-6.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Lightweight linen summer dress with belt</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>45.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>64.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-7.png" alt="Products" />
                                                <div className="discount">30% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-7.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">CARDIGO</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Classic leather biker jacket with zippers</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>05.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-8.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-18.html" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">CARDIGO</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Vintage wool peacoat (a type of short coat)</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>35.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>74.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-13.png" alt="Products" />
                                                <div className="discount">20% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-13.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">Lioness</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Sequins are shiny beads sewn on clothes</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>15.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-9.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-9.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SUAGAN</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Relaxed fit denim jeans with distressing </a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>25.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>34.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-10.png" alt="Products" />
                                                <div className="discount">30% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-10.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SOFOLI</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Vintage wool peacoat (a type of short coat)</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>44.60</span>
                                                    <span className="price prev-price"><span className="currency">$</span>66.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-12.png" alt="Products" />
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-12.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">SUGAN</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Striped cotton t-shirt with crew neck (crew neck means)</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>34.00</span>
                                                    <span className="price prev-price"><span className="currency">$</span>44.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!--=== Product Item  ===-->*/}
                                        <div className="product-item style-three">
                                            <div className="product-thumbnail">
                                                <img src="/src/assets/images/products/feature-product-14.png" alt="Products" />
                                                <div className="discount">20% Off</div>
                                                <div className="hover-content">
                                                    <a href="#" className="icon-btn"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="cart-btn"><i className="far fa-shopping-basket"></i></a>
                                                    <a href="/src/assets/images/products/feature-product-14.png" className="img-popup icon-btn"><i className="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-info-wrap">
                                                <div className="product-info">
                                                    <div className="product-meta d-flex">
                                                        <span>Brand: <a href="#">Lioness</a></span>
                                                        <ul className="ratings rating4">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><a href="shop-details.html">Floral print sundress with adjustable straps</a></h4>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price new-price"><span className="currency">$</span>50.00</span>
                                                    <span className="price prev-price"><span className="currency">$</span>94.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--===== End Shop Products Section  ======-->*/}
            {/*<!--===== Start Brand Section  ======-->*/}
            <section className="brand-section pt-125 pb-130">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title mb-50">
                            {/*<!--=== Section Title  ===-->*/}
                                <h2>We continue to expand with the trust of 10+ brand.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="brand-button float-lg-end mb-60">
                                <a href="index-2.html"><img src="/src/assets/images/brand/brand-btn.png" alt="Button" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="brands-row">
                        {/*<!--=== Brand Item  ===-->*/}
                        <div className="single-brand-item">
                            <a href="#" className="brand-img">
                                <img src="/src/assets/images/brand/brand-1.png" alt="Brand Image" />
                            </a>
                        </div>
                        {/*<!--=== Brand Item  ===-->*/}
                        <div className="single-brand-item">
                            <a href="#" className="brand-img">
                                <img src="/src/assets/images/brand/brand-2.png" alt="Brand Image" />
                            </a>
                        </div>
                        {/*<!--=== Brand Item  ===-->*/}
                        <div className="single-brand-item">
                            <a href="#" className="brand-img">
                                <img src="/src/assets/images/brand/brand-3.png" alt="Brand Image" />
                            </a>
                        </div>
                        {/*<!--=== Brand Item  ===-->*/}
                        <div className="single-brand-item">
                            <a href="#" className="brand-img">
                                <img src="/src/assets/images/brand/brand-4.png" alt="Brand Image" />
                            </a>
                        </div>
                        {/*<!--=== Brand Item  ===-->*/}
                        <div className="single-brand-item">
                            <a href="#" className="brand-img">
                                <img src="/src/assets/images/brand/brand-5.png" alt="Brand Image" />
                            </a>
                        </div>
                        {/*<!--=== Brand Item  ===-->*/}
                        <div className="single-brand-item">
                            <a href="#" className="brand-img">
                                <img src="/src/assets/images/brand/brand-6.png" alt="Brand Image" />
                            </a>
                        </div>
                        {/*<!--=== Brand Item  ===-->*/}
                        <div className="single-brand-item">
                            <a href="#" className="brand-img">
                                <img src="/src/assets/images/brand/brand-7.png" alt="Brand Image" />
                            </a>
                        </div>
                        {/*<!--=== Brand Item  ===-->*/}
                        <div className="single-brand-item">
                            <a href="#" className="brand-img">
                                <img src="/src/assets/images/brand/brand-8.png" alt="Brand Image" />
                            </a>
                        </div>
                        {/*<!--=== Brand Item  ===-->*/}
                        <div className="single-brand-item">
                            <a href="#" className="brand-img">
                                <img src="/src/assets/images/brand/brand-9.png" alt="Brand Image" />
                            </a>
                        </div>
                        {/*<!--=== Brand Item  ===-->*/}
                        <div className="single-brand-item">
                            <a href="#" className="brand-img">
                                <img src="/src/assets/images/brand/brand-10.png" alt="Brand Image" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--===== End Brand Section  ======-->*/}
            {/*<!--===== Start Testimonial Section  ======-->*/}
            <section className="testimonial-section pt-120 pb-120 p-r z-1">
                <div className="testimonial-bg-img">
                    <img src="/src/assets/images/testimonial/testimonial-img1.png" alt="Testimonial Image" />
                </div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-8">
                            <div className="testimonial-wrapper">
                                {/*<!--=== Section Title  ===-->*/}
                                <div className="section-title text-center mb-60">
                                    <div className="sub-heading d-inline-flex align-items-center">
                                        <i className="flaticon-sparkler"></i>
                                        <span className="sub-title">Testimonial</span>
                                    </div>
                                    <h2>What’s our clients say</h2>
                                </div>
                                <div className="testimonial-slider-two">
                                    <div className="testimonial-item style-two">
                                        <div className="testimonial-content">
                                            <ul className="ratings rating5 mb-25">
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                            <p className="mb-35">I recently ordered a few items from Fashionista Boutique, and I couldnt be happier with my purchase! The quality of the clothes is outstanding, and the fit is perfect. My order arrived promptly, beautifully packaged.</p>
                                            <div className="author-item">
                                                <div className="author-thumb">
                                                    <img src="/src/assets/images/testimonial/author-2.png" alt="author image" />
                                                </div>
                                                <div className="author-info">
                                                    <h5>Rhodes Jhon</h5>
                                                    <span className="position">Manager and CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item style-two">
                                        <div className="testimonial-content">
                                            <ul className="ratings rating5 mb-25">
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                            <p className="mb-35">I recently ordered a few items from Fashionista Boutique, and I couldnt be happier with my purchase! The quality of the clothes is outstanding, and the fit is perfect. My order arrived promptly, beautifully packaged.</p>
                                            <div className="author-item">
                                                <div className="author-thumb">
                                                    <img src="/src/assets/images/testimonial/author-2.png" alt="author image" />
                                                </div>
                                                <div className="author-info">
                                                    <h5>Rhodes Jhon</h5>
                                                    <span className="position">Manager and CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--===== End Testimonial Section  ======-->*/}
            {/*<!--====== End Header Section ======-->*/}
            <section className="blogs-section pt-110 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            {/*<!--=== Section Title  ===-->*/}
                            <div className="section-title mb-50">
                                <div className="sub-heading d-inline-flex align-items-center">
                                    <i className="flaticon-sparkler"></i>
                                    <span className="sub-title">Explore Our Blogs</span>
                                </div>
                                <h2>Explore Our Blogs</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blogs-arrows d-flex style-one mb-60"></div>
                        </div>
                    </div>
                    {/*<!--=== Blog Slider ===-->*/}
                    <div className="blogs-slider-one">
                        {/*<!--=== Blog Post Item ===-->*/}
                        <div className="blog-post-item style-three mb-30">
                            <div className="post-thumbnail">
                                <img src="/src/assets/images/blog/blog-1.jpg" alt="Post Thumbnail" />
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span><a href="#">WordPress</a></span>
                                    <span><a href="#">Aug 29, 2024</a></span>
                                </div>
                                <h3 className="title"><a href="blog-details.html">10 must-have fashion trends for this season. Those should be outstanding look</a></h3>
                                <a href="blog-details.html" className="theme-btn style-one">Reed More</a>
                            </div>
                        </div>
                        {/*<!--=== Blog Post Item ===-->*/}
                        <div className="blog-post-item style-three mb-30">
                            <div className="post-thumbnail">
                                <img src="/src/assets/images/blog/blog-2.jpg" alt="Post Thumbnail" />
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span><a href="#">WordPress</a></span>
                                    <span><a href="#">Aug 29, 2024</a></span>
                                </div>
                                <h3 className="title"><a href="blog-details.html">How to style your wardrobe on a budget. Make it easy for you to look great.</a></h3>
                                <a href="blog-details.html" className="theme-btn style-one">Reed More</a>
                            </div>
                        </div>
                        {/*<!--=== Blog Post Item ===-->*/}
                        <div className="blog-post-item style-three mb-30">
                            <div className="post-thumbnail">
                                <img src="/src/assets/images/blog/blog-3.jpg" alt="Post Thumbnail" />
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span><a href="#">WordPress</a></span>
                                    <span><a href="#">Aug 29, 2024</a></span>
                                </div>
                                <h3 className="title"><a href="blog-details.html">top 5 accessories to elevate any outfit. the ultimate guide to sustainable fashion</a></h3>
                                <a href="blog-details.html" className="theme-btn style-one">Reed More</a>
                            </div>
                        </div>
                        {/*<!--=== Blog Post Item ===-->*/}
                        <div className="blog-post-item style-three mb-30">
                            <div className="post-thumbnail">
                                <img src="/src/assets/images/blog/blog-4.jpg" alt="Post Thumbnail" />
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span><a href="#">WordPress</a></span>
                                    <span><a href="#">Aug 29, 2024</a></span>
                                </div>
                                <h3 className="title"><a href="blog-details.html">Effortless fashion tips for everyone. How to style your wardrobe on a budget. </a></h3>
                                <a href="blog-details.html" className="theme-btn style-one">Reed More</a>
                            </div>
                        </div>
                        {/*<!--=== Blog Post Item ===-->*/}
                        <div className="blog-post-item style-three mb-30">
                            <div className="post-thumbnail">
                                <img src="/src/assets/images/blog/blog-2.jpg" alt="Post Thumbnail" />
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span><a href="#">WordPress</a></span>
                                    <span><a href="#">Aug 29, 2024</a></span>
                                </div>
                                <h3 className="title"><a href="blog-details.html">How to style your wardrobe on a budget. Make it easy for you to look great.</a></h3>
                                <a href="blog-details.html" className="theme-btn style-one">Reed More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--====== Start Newsletter Section ======-->*/}
            <section className="newsletter-section">
                <div className="newsletter-wrapper-two p-r z-1 pt-80 pb-85">
                    <div className="newsletter-image-two"><img src="/src/assets/images/newsletter/newsletter-2.jpg" alt="newsletter image" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-content-box">
                                    {/*<!--=== Section Title  ===-->*/}
                                    <div className="section-title">
                                        <div className="sub-heading d-inline-flex align-items-center">
                                            <i className="flaticon-sparkler"></i>
                                            <span className="sub-title">Our Blogs</span>
                                        </div>
                                        <h2>Subscribe <span>newsletter</span> <br /> to & get Every day discount</h2>
                                    </div>
                                    <form>
                                        <input type="email" className="form_control" placeholder="Write your Email Address" name="email" required />
                                        <button className="theme-btn style-one">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--====== End Newsletter Section ======-->*/}
            {/*<!--====== Start Features Section ======-->*/}
            <section className="features-section pt-60 pb-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            {/*<!--=== Iconic Box Item ===-->*/}
                            <div className="iconic-box-item style-three mb-25">
                                <div className="icon">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <div className="content">
                                    <h5>Free Shipping</h5>
                                    <p>You get your items delivered without any extra cost.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            {/*<!--=== Iconic Box Item ===-->*/}
                            <div className="iconic-box-item style-three mb-25">
                                <div className="icon">
                                    <i className="fas fa-microphone"></i>
                                </div>
                                <div className="content">
                                    <h5>Great Support 24/7</h5>
                                    <p>Our customer support team is available around the clock </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            {/*<!--=== Iconic Box Item ===-->*/}
                            <div className="iconic-box-item style-three mb-25">
                                <div className="icon">
                                    <i className="far fa-handshake"></i>
                                </div>
                                <div className="content">
                                    <h5>Return Available</h5>
                                    <p>Making it easy to return any items if youre not satisfied.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            {/*<!--=== Iconic Box Item ===-->*/}
                            <div className="iconic-box-item style-three mb-25">
                                <div className="icon">
                                    <i className="fas fa-sack-dollar"></i>
                                </div>
                                <div className="content">
                                    <h5>Secure Payment</h5>
                                    <p>Shop with confidence knowing that our secure payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--====== End Features Section ======-->*/}
           
        </main>
    </div>
  )
}



export default function ShopDetails() {
  return (
    <div>
       {/*<!--====== Main Bg  ======-->*/}
        {/* <main className="main-bg">
           */}
            {/*<!--====== Start Page Banner Section ======-->*/}
            <section className="page-banner">
                <div className="page-banner-wrapper p-r z-1">
                    <svg className="lineanm" viewBox="0 0 1920 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="line" d="M-39 345.187C70 308.353 397.628 293.477 436 145.186C490 -63.5 572 -57.8156 688 255.186C757.071 441.559 989.5 -121.315 1389 98.6856C1708.6 274.686 1940.33 156.519 1964.5 98.6856" stroke="white" strokeWidth="3" strokeDasharray="2 2"/>
                    </svg>
                    <div className="page-image"><img src="/src/assets/images/bg/page-img-1.png" alt="image" /></div>
                    <svg className="page-svg" viewBox="0 0 1920 85" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.1742 33.0065C14.029 35.2507 7.5486 39.0636 0 40.7339V86H1937V64.9942C1933.1 60.1623 1912.65 65.1777 1904.51 62.6581C1894.22 59.4678 1884.93 55.0079 1873.77 52.7742C1861.2 50.2585 1823.41 36.3854 1811.99 39.9252C1805.05 42.0727 1796.94 37.6189 1789.36 36.6007C1769.18 33.8879 1747.19 31.1848 1726.71 29.7718C1703.81 28.1919 1678.28 27.0012 1657.53 34.4442C1636.45 42.005 1606.07 60.856 1579.5 55.9191C1561.6 52.5906 1543.41 47.0959 1528.45 56.9075C1510.85 68.4592 1485.74 74.2518 1460.44 76.136C1432.32 78.2297 1408.53 70.6879 1384.73 62.2987C1339.52 46.361 1298.19 27.1677 1255.08 9.28534C1242.58 4.10111 1214.68 15.4762 1200.55 16.6533C1189.77 17.5509 1181.74 15.4508 1172.12 12.8795C1152.74 7.70033 1133.23 2.88525 1111.79 2.63621C1088.85 2.36971 1073.94 7.88289 1056.53 15.8446C1040.01 23.3996 1027.48 26.1777 1007.8 26.1777C993.757 26.1777 975.854 25.6887 962.844 28.9632C941.935 34.2258 932.059 38.7874 914.839 28.6037C901.654 20.8061 866.261 -2.56499 844.356 7.12886C831.264 12.9222 820.932 21.5146 807.663 27.5255C798.74 31.5679 779.299 42.0561 766.33 39.1166C758.156 37.2637 751.815 31.6349 745.591 28.2443C730.967 20.2774 715.218 13.2948 695.846 10.723C676.168 8.11038 658.554 23.1787 641.606 27.4357C617.564 33.4742 602.283 27.7951 579.244 27.7951C568.142 27.7951 548.414 30.4002 541.681 23.6618C535.297 17.2722 530.162 9.74921 523.263 3.71444C517.855 -1.01577 505.798 -0.852017 498.318 2.09709C479.032 9.7007 453.07 10.0516 431.025 9.64475C407.556 9.21163 368.679 1.61612 346.618 10.3636C319.648 21.0575 291.717 53.8338 254.67 45.2266C236.134 40.9201 225.134 37.5813 204.78 40.7339C186.008 43.6415 171.665 50.7785 156.051 57.3567C146.567 61.3523 152.335 52.6281 151.12 47.9222C149.535 41.7853 139.994 34.5585 132.991 30.4008C120.206 22.8098 90.2848 24.3246 74.2546 24.6502C55.5552 25.0301 37.9201 27.747 21.1742 33.0065Z" fill="#FFFAF3"/>
                    </svg>
                    <div className="shape shape-one"><span></span></div>
                    <div className="shape shape-two"><span></span></div>
                    <div className="shape shape-three"><span><img src="/src/assets/images/shape/curved-arrow.png" alt="" /></span></div>
                    <div className="shape shape-four"><span><img src="/src/assets/images/shape/stars.png" alt="" /></span></div>                
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="page-banner-content">
                                    <h1>Shop Details</h1>
                                    <ul className="breadcrumb-link">
                                        <li><a href="index.html">Home</a></li>
                                        <li><i className="far fa-long-arrow-right"></i></li>
                                        <li className="active">Shop Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--====== End Page Banner Section ======-->*/}
            {/*<!--====== Start Shop Details Section ======-->*/}
            <section className="shop-details-section pt-120 pb-80">
                <div className="container">
                    <div className="shop-details-wrapper">
                        <div className="row">
                            <div className="col-xl-6">
                                {/*<!--=== Product Gallery ===-->*/}
                                <div className="product-gallery-area mb-50 wow fadeInLeft">
                                    <div className="product-big-slider mb-30">
                                        <div className="product-img">
                                            <a href="/src/assets/images/products/product-big-1.jpg" className="img-popup"><img src="/src/assets/images/products/product-big-1.jpg" alt="Product" /></a>
                                        </div>
                                        <div className="product-img">
                                            <a href="/src/assets/images/products/product-big-2.jpg" className="img-popup"><img src="/src/assets/images/products/product-big-2.jpg" alt="Product" /></a>
                                        </div>
                                        <div className="product-img">
                                            <a href="/src/assets/images/products/product-big-3.jpg" className="img-popup"><img src="/src/assets/images/products/product-big-3.jpg" alt="Product" /></a>
                                        </div>
                                        <div className="product-img">
                                            <a href="/src/assets/images/products/product-big-4.jpg" className="img-popup"><img src="/src/assets/images/products/product-big-4.jpg" alt="Product" /></a>
                                        </div>
                                        <div className="product-img">
                                            <a href="/src/assets/images/products/product-big-5.jpg" className="img-popup"><img src="/src/assets/images/products/product-big-5.jpg" alt="Product" /></a>
                                        </div>
                                    </div>
                                    <div className="product-thumb-slider">
                                        <div className="product-img">
                                            <img src="/src/assets/images/products/product-thumb-1.jpg" alt="Product" />
                                        </div>
                                        <div className="product-img">
                                            <img src="/src/assets/images/products/product-thumb-2.jpg" alt="Product" />
                                        </div>
                                        <div className="product-img">
                                            <img src="/src/assets/images/products/product-thumb-3.jpg" alt="Product"   />
                                        </div>
                                        <div className="product-img">
                                            <img src="/src/assets/images/products/product-thumb-4.jpg" alt="Product" />
                                        </div>
                                        <div className="product-img">
                                            <img src="/src/assets/images/products/product-thumb-5.jpg" alt="Product" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="product-info mb-50">
                                    <span className="sale"><i className="fas fa-tags"></i>SALE 70% OFF</span>
                                    <h4 className="title">Cargo shorts with pockets & sundress drawstring </h4>
                                    <ul className="ratings rating5">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><a href="#">(45 Reviews)</a></li>
                                    </ul>
                                    <p>A type of casual shorts, typically for men, with multiple pockets for function.
                                        Sundress with drawstring: A loose-fitting, sleeveless dress, often for women, with a drawstring at the waist for adjustability and a relaxed silhouette.</p>
                                    <div className="product-price">
                                        <span className="price prev-price"><span className="currency">$</span>70.00</span>
                                        <span className="price new-price"><span className="currency">$</span>40.00</span>
                                    </div>
                                    <ul className="size-list mb-30">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="radio"  id="size2" />
                                                <label className="form-check-label" htmlFor="size2">
                                                    S
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="radio" id="size3" />
                                                <label className="form-check-label" htmlFor="size3">
                                                    M
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="radio" id="size4" />
                                                <label className="form-check-label" htmlFor="size4">
                                                    L
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="radio"  id="size5" />
                                                <label className="form-check-label" htmlFor="size5">
                                                    XL
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="radio"  id="size6" />
                                                <label className="form-check-label" htmlFor="size6">
                                                    2XL
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="product-cart-variation">
                                        <ul>
                                            <li>
                                                <div className="quantity-input">
                                                    <button className="quantity-down"><i className="far fa-minus"></i></button>
                                                    <input className="quantity" type="text"  name="quantity" />
                                                    <button className="quantity-up"><i className="far fa-plus"></i></button>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="shops.html" className="theme-btn style-one">Add To cart</a>
                                            </li>
                                            <li>
                                                <a href="shops.html" className="icon-btn"><i className="far fa-heart"></i></a>
                                            </li>
                                            <li>
                                                <a href="shops.html" className="icon-btn"><i className="far fa-sync"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-meta">
                                        <ul>
                                            <li><span>SKU :</span>KE-91039</li>
                                            <li><span>Category :</span>Women Cloths</li>
                                            <li><span>Tags :</span><a href="#">Bags</a>,<a href="#">Cloths</a>,<a href="#">Dress</a></li>
                                            <li><span>Share :</span>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="special-features">
                                        <span><i className="far fa-shipping-fast"></i>Free Shipping</span>
                                        <span><i className="far fa-box-open"></i>Easy Returns</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="additional-information-wrapper">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="additional-info-box mb-40">
                                        <h3>Additional Information:</h3>
                                        <ul>
                                            <li>Fabric type <span>Georgette</span></li>
                                            <li>Care instructions:<span>Machine Wash</span></li>
                                            <li>Occasion type: <span>Casual</span></li>
                                            <li>Sleeve type: <span>Long Sleeve</span></li>
                                            <li>Pattern:<span>Solid</span></li>
                                            <li>Closure type: <span>Georgette</span></li>
                                            <li>Country of Origin<span>Bangladesh</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="description-wrapper mb-40">
                                        <div className="pesco-tabs style-two mb-50">
                                            <ul className="nav nav-tabs">
                                                <li>
                                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#description">Description</button>
                                                </li>
                                                <li>
                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#reviews">Reviews</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content">
                                            <div className="tab-pane fade active show" id="description">
                                                <h4>Description</h4>
                                                <p>Cargo shorts: Rugged, casual shorts with multiple pockets for utility, often in khaki or olive green.
                                                    Sundress with drawstring: A breezy, summery dress with a flowy skirt, often made from light, patterned fabric. It has a drawstring waist for a comfortable, adjustable fit. Designed for practicality, cargo shorts boast numerous pockets on the legs and hips. everyday wear for someone who needs to carry a lot.</p>
                                                <h4>Features</h4>
                                                <ul className="list">
                                                    <li>Function First</li>
                                                    <li>Summer Breeze </li>
                                                    <li>Casual and Rugged</li>
                                                    <li>Possible Interpretations</li>
                                                </ul>
                                            </div>
                                            <div className="tab-pane fade" id="reviews">
                                                <div className="pesco-comment-area mb-80">
                                                    <h4>Total Reviews (90)</h4>
                                                    <ul>
                                                        <li className="comment">
                                                            <div className="pesco-reviews-item">
                                                                <div className="author-thumb-info">
                                                                    <div className="author-thumb">
                                                                        <img src="/src/assets/images/products/review-1.jpg" alt="Auhthor" />
                                                                    </div>
                                                                    <div className="author-info">
                                                                        <h5>Amelia Rodriguez</h5>
                                                                        <div className="author-meta">
                                                                            <ul className="ratings">
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                            <span>20 March 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="author-review-content">
                                                                    <p>Men’s Slim Fit Dress Shirt is an excellent choice for those who value modern style and impeccable tailoring. Crafted from a high-quality blend of cotton and polyester, this shirt offers a smooth, wrinkle-resistant finish that stays crisp throughout the day.</p>
                                                                </div>
                                                                <a href="#" className="reply"><i className="fas fa-reply-all"></i>Reply</a>
                                                            </div>
                                                        </li>
                                                        <li className="comment">
                                                            <div className="pesco-reviews-item">
                                                                <div className="author-thumb-info">
                                                                    <div className="author-thumb">
                                                                        <img src="/src/assets/images/products/review-2.jpg" alt="Auhthor" />
                                                                    </div>
                                                                    <div className="author-info">
                                                                        <h5>Amelia Rodriguez</h5>
                                                                        <div className="author-meta">
                                                                            <ul className="ratings">
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                            <span>20 March 2024</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="author-review-content">
                                                                    <p>Men’s Slim Fit Dress Shirt is an excellent choice for those who value modern style and impeccable tailoring. Crafted from a high-quality blend of cotton and polyester, this shirt offers a smooth, wrinkle-resistant finish that stays crisp throughout the day.</p>
                                                                </div>
                                                                <a href="#" className="reply"><i className="fas fa-reply-all"></i>Reply</a>
                                                            </div>
                                                            <ul className="reviews-reply">
                                                                <li className="comment">
                                                                    <div className="pesco-reviews-item">
                                                                        <div className="author-thumb-info">
                                                                            <div className="author-thumb">
                                                                                <img src="/src/assets/images/products/review-3.jpg" alt="Auhthor" />
                                                                            </div>
                                                                            <div className="author-info">
                                                                                <h5>Amelia Rodriguez</h5>
                                                                                <div className="author-meta">
                                                                                    <ul className="ratings">
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                    </ul>
                                                                                    <span>20 March 2024</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="author-review-content">
                                                                            <p>Men’s Slim Fit Dress Shirt is an excellent choice for those who value modern style and impeccable tailoring. Crafted from a high-quality blend of cotton and polyester, this shirt offers a smooth, wrinkle-resistant finish that stays crisp throughout the day.</p>
                                                                        </div>
                                                                        <a href="#" className="reply"><i className="fas fa-reply-all"></i>Reply</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="reviews-contact-area">
                                                    <h4>Write Comment</h4>
                                                    <ul className="ratings rating5 mb-40">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><a href="#">(10)</a></li>
                                                    </ul>
                                                    <form className="pesco-contact-form">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <input type="text" placeholder="Name" className="form_control" name="name" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <input type="email" placeholder="Email" className="form_control" name="Email" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <textarea className="form_control" placeholder="Write Reviews" name="message" cols="5" rows="10"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <button className="theme-btn style-one">Submit Review</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
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
            {/*<!--====== End Shop Details Section ======-->*/}
            {/*<!--====== Related Product Section ======-->*/}
            <section className="releted-product-section pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {/*<!--=== Section Title ===-->*/}
                            <div className="section-title mb-50">
                                <div className="sub-heading d-inline-flex align-items-center">
                                    <i className="flaticon-sparkler"></i>
                                    <span className="sub-title">Releted Products</span>
                                </div>
                                <h2>Customers also purchased</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="releted-product-arrows style-one"></div>
                        </div>
                    </div>
                    <div className="releted-product-slider">
                        {/*<!--=== Project Item  ===-->*/}
                        <div className="product-item style-one mb-40">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-1.png" alt="Products" />
                                <div className="discount">80% Off</div>
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
                                    <ul className="ratings rating4">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><a href="#">(50)</a></li>
                                    </ul>
                                    <h4 className="title"><a href="shop-details.html">Cozy knit sweater with pockets</a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price prev-price"><span className="currency">$</span>67.00</span>
                                    <span className="price new-price"><span className="currency">$</span>23.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Project Item  ===-->*/}
                        <div className="product-item style-one mb-40">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-2.png" alt="Products" />
                                <div className="discount">80% Off</div>
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
                                        <li><a href="#">(80)</a></li>
                                    </ul>
                                    <h4 className="title"><a href="shop-details.html">Elegant silk dress with sequins</a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price prev-price"><span className="currency">$</span>67.00</span>
                                    <span className="price new-price"><span className="currency">$</span>23.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Project Item  ===-->*/}
                        <div className="product-item style-one mb-40">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-3.png" alt="Products" />
                                <div className="discount">40% Off</div>
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
                                    <ul className="ratings rating2">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><a href="#">(47)</a></li>
                                    </ul>
                                    <h4 className="title"><a href="shop-details.html">Cargo shorts with pockets and drawstring</a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price prev-price"><span className="currency">$</span>67.00</span>
                                    <span className="price new-price"><span className="currency">$</span>23.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Project Item  ===-->*/}
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
                                    <ul className="ratings rating4">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><a href="#">(47)</a></li>
                                    </ul>
                                    <h4 className="title"><a href="shop-details.html">Athletic leggings with mesh panels</a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price prev-price"><span className="currency">$</span>80.00</span>
                                    <span className="price new-price"><span className="currency">$</span>40.00</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--=== Project Item  ===-->*/}
                        <div className="product-item style-one mb-40">
                            <div className="product-thumbnail">
                                <img src="/src/assets/images/products/feature-product-2.png" alt="Products" />
                                <div className="discount">80% Off</div>
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
                                        <li><a href="#">(80)</a></li>
                                    </ul>
                                    <h4 className="title"><a href="shop-details.html">Elegant silk dress with sequins</a></h4>
                                </div>
                                <div className="product-price">
                                    <span className="price prev-price"><span className="currency">$</span>67.00</span>
                                    <span className="price new-price"><span className="currency">$</span>23.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--====== End Product Section ======-->*/}
            {/*<!--====== Start Newsletter Sections  ======-->*/}
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
            {/*<!--====== End Newsletter Sections  ======-->*/}
          
        {/* </main> */}
        
    </div>
  )
}

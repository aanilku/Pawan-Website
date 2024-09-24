import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      
      {/* <!--=== Footer Bg Wrapper  ===--> */}
                <div className="footer-bg-wrapper gray-bg">
                    <div className="footer-shape shape-one"><span><img src="/src/assets/images/footer/shape-1.png" alt="shape" /></span></div>
                    <svg id="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 75" fill="none">
                        <path d="M1888.99 40.9061C1901.65 33.5506 1917.87 10.0999 1920 0.000160217L2.48878 0.110695C-18.5686 5.37782 100.829 31.8098 104.136 32.5745C126.908 37.8407 182.163 45.7157 196.02 59.5798C199.049 62.6106 214.802 72.2205 222.15 72.2205C228.696 72.2205 237.893 62.3777 241.388 59.5798C254.985 48.6964 317.621 62.748 338.154 55.5577C378.089 41.5729 396.6 21.3246 452.148 27.4033C469.55 29.3076 497.787 39.4201 516.467 36.022C529.695 33.6155 539.612 26.7953 554.369 23.9558C576.978 19.6057 584.786 12.6555 612.371 13.0388C629.18 13.2724 648.084 27.6499 658.6 33.8673C672.059 41.8242 673.268 47.0554 692.77 41.4805C711.954 35.9964 746.756 38.27 766.852 40.0441C779.483 41.1593 819.866 52.3111 831.458 47.8009C837.236 45.5528 840.64 43.5162 847.537 41.3369C869.486 34.402 905.397 34.0022 929.946 38.6077C947.224 41.8489 987.666 45.9365 999.721 52.9722C1005.16 56.1489 1004.78 60.6539 1010.35 63.6019C1018.09 67.7037 1021.56 68.3083 1029.01 67.4803C1042.77 65.9505 1045.29 61.7272 1056.86 58.1434C1090.94 47.59 1121.71 32.7536 1160.52 26.5415C1182.98 22.9457 1193.92 36.1401 1209.04 41.4806C1240.16 52.468 1262.92 57.9972 1299.78 49.2374C1331.73 41.6466 1369.13 23.3813 1405.73 23.3813C1419.55 23.3813 1427.96 32.734 1435.31 37.4585C1451.38 47.7919 1467 56.9943 1493.89 56.9943C1532.36 56.9943 1544.2 49.9853 1574.29 39.0386C1588.58 33.8384 1616.86 22.826 1635.73 23.3813C1651.4 23.8424 1656.97 43.603 1667.89 48.6629C1683.26 55.7835 1710.61 49.5903 1723.88 43.7789C1736.22 38.3771 1758.43 20.6985 1777.29 30.1327C1788.48 35.7274 1794.71 53.9926 1801.12 61.5909C1815.62 78.7687 1819.96 77.5598 1843.05 68.4859C1861.58 61.2028 1873.63 49.8315 1888.99 40.9061Z" fill="#FFFAF3"></path>
                    </svg>
                    {/* <!--=== Footer Widget Area  ===--> */}
                    <div className="footer-widget-area pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-sm-6">
                                    {/* <!--=== Footer Widget  ===--> */}
                                    <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
                                        <div className="widget-content">
                                            <Link to="/" className="footer-logo"><img src="/src/assets/images/logo/logo-main.png" alt="Brand Logo" /></Link>
                                            <p>Pesco is an exciting International brand we provide high quality cloths</p>
                                            <ul className="ct-info-list mb-30">
                                                <li>
                                                    <i className="fas fa-envelope"></i>
                                                    <Link to="mailto:info@mydomain.com">info@mydomain.com</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-phone-alt"></i>
                                                    <Link to="mailto:info@mydomain.com">info@mydomain.com</Link>
                                                </li>
                                            </ul>
                                            <ul className="social-link">
                                                <li>
                                                    <span>Find Us:</span>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-sm-6">
                                    {/* <!--=== Footer Widget ===--> */}
                                    <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                                        <div className="widget-content">
                                            <h4 className="widget-title">Customer Services</h4>
                                            <ul className="widget-menu">
                                                <li><img src="/src/assets/images/icon/star-3.svg" alt="star icon" /><Link to="#">Collections &amp; Delivery</Link></li>
                                                <li><img src="/src/assets/images/icon/star-3.svg" alt="star icon" /><Link to="#">Returns &amp; Refunds</Link></li>
                                                <li><img src="/src/assets/images/icon/star-3.svg" alt="star icon" /><Link to="#">Terms &amp; Conditions</Link></li>
                                                <li><img src="/src/assets/images/icon/star-3.svg" alt="star icon" /><Link to="#">Delivery Return</Link></li>
                                                <li><img src="/src/assets/images/icon/star-3.svg" alt="star icon" /><Link to="#">Store Locations</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-sm-6">
                                    {/* <!--=== Footer Widget ===--> */}
                                    <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                                        <div className="widget-content">
                                            <h4 className="widget-title">Quick Link</h4>
                                            <ul className="widget-menu">
                                                <li><img src="/src/assets/images/icon/star-3.svg" alt="star icon" /><Link to="#">Privacy Policy</Link></li>
                                                <li><img src="/src/assets/images/icon/star-3.svg" alt="star icon" /><Link to="#">Terms Of Use</Link></li>
                                                <li><img src="/src/assets/images/icon/star-3.svg" alt="star icon" /><Link to="#">FAQ</Link></li>
                                                <li><img src="/src/assets/images/icon/star-3.svg" alt="star icon" /><Link to="#">Contact</Link></li>
                                                <li><img src="/src/assets/images/icon/star-3.svg" alt="star icon" /><Link to="#">Login / Register</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    {/* <!--=== Footer Widget  ===--> */}
                                    <div className="footer-widget footer-recent-post-widget mb-40 wow fadeInUp">
                                        <h4 className="widget-title">Recent Post</h4>
                                        <div className="widget-content">
                                            <div className="recent-post-item">
                                                <div className="thumb">
                                                    <img src="/src/assets/images/footer/recent-post-1.png" alt="post thumb" />
                                                </div>
                                                <div className="content">
                                                    <h4><Link to="/blogsDetails">Tips on Finding Affordable Fashion Gems Online</Link></h4>
                                                    <span><Link to="/blogsDetails">July 11, 2023</Link></span>
                                                </div>
                                            </div>
                                            <div className="recent-post-item">
                                                <div className="thumb">
                                                    <img src="/src/assets/images/footer/recent-post-2.png" alt="post thumb" />
                                                </div>
                                                <div className="content">
                                                    <h4><Link to="/blogsDetails">Mastering the Art of Fashion E-commerce Marketing</Link></h4>
                                                    <span><Link to="/blogsDetails">JUly 11, 2024</Link></span>
                                                </div>
                                            </div>
                                            <div className="recent-post-item">
                                                <div className="thumb">
                                                    <img src="/src/assets/images/footer/recent-post-3.png" alt="post thumb" />
                                                </div>
                                                <div className="content">
                                                    <h4><Link to="/blogsDetails">Must-Have Trends You Can Shop Online Now</Link></h4>
                                                    <span><Link to="/blogsDetails">July 11, 2024</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--=== Footer Copyright  ===--> */}
                    <div className="copyright-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="copyright-text">
                                        <p>© 2024. All rights reserved by <span>Pixelfit</span></p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="payment-method text-lg-end">
                                        <Link to="#"><img src="/src/assets/images/footer/payment-method.png" alt="payment-method" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
    </div>
  )
}

import Footer from "../Footer";
import Header from "../Header";
import { Helmet } from 'react-helmet';

const UserLayout =({children})=>{
return (
    <>
     <Helmet>
            <link rel="shortcut icon" href="/src/assets/images/favicon.png" type="image/png" />
        
        <link href="https://fonts.googleapis.com/css2?family=Aoboshi+One&amp;family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&amp;display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="/src/assets/fonts/flaticon/flaticon_pesco.css" />

        <link rel="stylesheet" href="/src/assets/fonts/fontawesome/css/all.min.css" />

        <link rel="stylesheet" href="/src/assets/vendor/bootstrap/css/bootstrap.min.css" />
        
        <link rel="stylesheet" href="/src/assets/vendor/slick/slick.css" />

        <link rel="stylesheet" href="/src/assets/vendor/nice-select/css/nice-select.css" />

        <link rel="stylesheet" href="/src/assets/vendor/magnific-popup/dist/magnific-popup.css" />

        <link rel="stylesheet" href="/src/assets/vendor/jquery-ui/jquery-ui.min.css" />

        <link rel="stylesheet" href="/src/assets/vendor/aos/aos.css" />

        <link rel="stylesheet" href="/src/assets/css/default.css" />
        
        <link rel="stylesheet" href="/src/assets/css/style.css" />
    </Helmet>
    
  
    <Header />
    <main>{children}</main>
    <Footer />
   
        <script src="/src/assets/vendor/jquery-3.6.0.min.js"></script>
      
        <script src="/src/assets/vendor/popper/popper.min.js"></script>
   
        <script src="/src/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    
        <script src="/src/assets/vendor/slick/slick.min.js"></script>
   
        <script src="/src/assets/vendor/magnific-popup/dist/jquery.magnific-popup.min.js"></script>
     
        <script src="/src/assets/vendor/nice-select/js/jquery.nice-select.min.js"></script>
   
        <script src="/src/assets/vendor/jquery-ui/jquery-ui.min.js"></script>
       
        <script src="/src/assets/vendor/simplyCountdown.min.js"></script>
    
        <script src="/src/assets/vendor/aos/aos.js"></script>
      
        <script src="/src/assets/js/theme.js"></script>
    </>
)
}

export default UserLayout;
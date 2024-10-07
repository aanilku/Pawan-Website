import { Helmet } from "react-helmet";
import AdminFooter from "../AdminFooter";
import AdminHeader from "../AdminHeader";



const AdminLayout =({children})=>{
   return(
    <>
   
    <title>Valex - Premium dashboard ui bootstrap rwd admin html5 template</title> 
    <link rel="icon" href="/src/adminAssets/img/brand/favicon.png" type="image/x-icon" /> 
    <link href="/src/adminAssets/css/icons.css" rel="stylesheet" /> 
    <link id="style" href="/src/adminAssets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> 
    <link href="/src/adminAssets/css/style.css" rel="stylesheet" />
    <link href="/src/adminAssets/css/plugins.css" rel="stylesheet" /> 
    <link href="/src/adminAssets/css/animate.css" rel="stylesheet" />
    <link href="/src/adminAssets/switcher/css/switcher.css" rel="stylesheet" />
    <link href="/src/adminAssets/switcher/demo.css" rel="stylesheet" />
    {/* <meta http-equiv="imagetoolbar" content="no" /> */}
  

   <AdminHeader />
   <div className="page custom-index">
   <main>{children}</main>
   </div>
   
    <AdminFooter />

    <script src="/src/adminAssets/plugins/jquery/jquery.min.js"></script>
    <script src="/src/adminAssets/plugins/bootstrap/js/popper.min.js"></script>
    <script src="/src/adminAssets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="/src/adminAssets/plugins/chart.js/Chart.bundle.min.js"></script>
    <script src="/src/adminAssets/plugins/moment/moment.js"></script>
    <script src="/src/adminAssets/plugins/jquery-sparkline/jquery.sparkline.min.js"></script>
    <script src="/src/adminAssets/plugins/raphael/raphael.min.js"></script>
    <script src="/src/adminAssets/js/apexcharts.js"></script>
    <script src="/src/adminAssets/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <script src="/src/adminAssets/plugins/perfect-scrollbar/p-scroll.js"></script>
    <script src="/src/adminAssets/js/eva-icons.min.js"></script>
    <script src="/src/adminAssets/plugins/sidebar/sidebar.js"></script>
    <script src="/src/adminAssets/plugins/sidebar/sidebar-custom.js"></script>
    <script src="/src/adminAssets/js/sticky.js"></script>
    <script src="/src/adminAssets/js/modal-popup.js"></script>
    <script src="/src/adminAssets/plugins/side-menu/sidemenu.js"></script>
    <script src="/src/adminAssets/plugins/jqvmap/jquery.vmap.min.js"></script>
    <script src="/src/adminAssets/plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
    <script src="/src/adminAssets/js/index.js"></script>
    <script src="/src/adminAssets/js/themecolor.js"></script>
    <script src="/src/adminAssets/js/apexcharts.js"></script>
    <script src="/src/adminAssets/js/jquery.vmap.sampledata.js"></script>
    <script src="/src/adminAssets/switcher/js/switcher.js"></script>
    <script src="/src/adminAssets/js/custom.js"></script>
    <script src="/src/adminAssets/js/swither-styles.js"></script>
   
    </>
   )
}

export default AdminLayout;
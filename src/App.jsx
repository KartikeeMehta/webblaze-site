import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About_us from "./pages/About_us";
import Uiux_app from "./pages/Uiux_app";
import Word_Press from "./pages/Word_Press";
import Web_Design from "./pages/Web_Design";
import ReactJs from "./pages/ReactJs";
import Shopify from "./pages/Shopify";
import Shopify_app from "./pages/Shopify_app";
import Php_laravel from "./pages/Php_laravel";
import Javascript from "./pages/Javascript";
import VueJs from "./pages/VueJs";
import Graphic_design from "./pages/Graphic_design";
import Angular_js from "./pages/Angular_js";
import Nodejs from "./pages/Nodejs";
import Aws from "./pages/Aws";
import Photography from "./pages/Photography";
import Seo from "./pages/Seo";
import Ppc from "./pages/Ppc";
import Branding from "./pages/Branding";
import GrowthMarketing from "./pages/growthMarketing";
import Smm from "./pages/Smm";
import Google_ads from "./pages/Google_ads";
import Linux_Admin from "./pages/Linux_Admin";
import P2pCryptoExChange from "./pages/P2pCryptoExChange";
import Decentalized from "./pages/Decentalized";
import SmartContain from "./pages/SmartContain";
import Nft_MarketPlace from "./pages/Nft_MarketPlace";
import AI_dev from "./pages/AI_dev";
import Shop_metaverse from "./pages/shop_metaverse";
import Virtual_store from "./pages/virtual_store";
import Virtual_clinic from "./pages/virtual_clinic";
import AI_chatbot from "./pages/AI_chatbot";
import ThreeD_Avatar from "./pages/ThreeD_Avatar";
import Threed_JewelryDesign from "./pages/Threed_JewelryDesign";
import ThreeD_Productdesign from "./pages/ThreeD_Productdesign";
import AI_news from "./pages/AI_news";
import AI_sexting from "./pages/AI_sexting";
import ThreeD_Animation from "./pages/ThreeD_Animation";
import Uber_Clone from "./pages/Uber_Clone";
import Taxi_app from "./pages/Taxi_app";
import Hospital_manage from "./pages/Hospital_manage";
import EV_charge from "./pages/EV_charge";
import Dating_app from "./pages/Dating_app";
import Food_delivery from "./pages/Food_delivery";
import Lms from "./pages/Lms";
import Cash_AppClone from "./pages/Cash_AppClone";
import Doordash_Clone from "./pages/Doordash_Clone";
import Handyman_Clone from "./pages/Handyman_Clone";
import School_ManagementSoftware from "./pages/School_ManagementSoftware";
import Restaurant_Management from "./pages/Restaurant_Management";
import Onlyfan_clone from "./pages/Onlyfan_clone";
import CarPooling_App from "./pages/CarPooling_App";
import E_comm from "./pages/E_comm";
import Car_rental from "./pages/Car_rental";
import RealEstate_Management from "./pages/RealEstate_Management";
import Pickup from "./pages/Pickup";
import Hotel_management from "./pages/hotel_management";
import Contact_Us from "./pages/Contact_Us";
import Free_Seo_Audit from "./pages/Free_Seo_Audit";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Case_Studies from "./pages/Case_Studies";
import ReadMore_MetaverseEcomerce from "./pages/ReadMore_MetaverseEcomerce";
import ReadMore_SmarterCommutes from "./pages/ReadMore_SmarterCommutes";
import ReadMore_AIAppDev from "./pages/ReadMore_AIAppDev";
import ReadMore_TopSoftware from "./pages/ReadMore_TopSoftware";
import ReadMore_ShopifyStore from "./pages/ReadMore_ShopifyStore";
import ReadMore_WordPress from "./pages/ReadMore_WordPress";
import ReadMoreAIDevelopment from "./pages/ReadMoreAIDevelopment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About_us" element={<About_us />} />
        <Route path="/Uiux_app" element={<Uiux_app />} />
        <Route path="/Word_Press" element={<Word_Press />} />
        <Route path="/Web_Design" element={<Web_Design />} />
        <Route path="/Shopify" element={<Shopify />} />
        <Route path="/Shopify_app" element={<Shopify_app />} />
        <Route path="/Php_laravel" element={<Php_laravel />} />
        <Route path="/Javascript" element={<Javascript />} />
        <Route path="/ReactJs" element={<ReactJs />} />
        <Route path="/VueJs" element={<VueJs />} />
        <Route path="/Graphic_design" element={<Graphic_design />} />
        <Route path="/Nodejs" element={<Nodejs />} />
        <Route path="/Angular_js" element={<Angular_js />} />
        <Route path="/Aws" element={<Aws />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/Seo" element={<Seo />} />
        <Route path="/Ppc" element={<Ppc />} />
        <Route path="/Branding" element={<Branding />} />
        <Route path="/GrowthMarketing" element={<GrowthMarketing />} />
        <Route path="/Smm" element={<Smm />} />
        <Route path="/Google_ads" element={<Google_ads />} />
        <Route path="/Linux_admin" element={<Linux_Admin />} />
        <Route path="/P2pCryptoExChange" element={<P2pCryptoExChange />} />
        <Route path="/Decentalized" element={<Decentalized />} />
        <Route path="/SmartContain" element={<SmartContain />} />
        <Route path="/Nft_MarketPlace" element={<Nft_MarketPlace />} />
        <Route path="/AI_dev" element={<AI_dev />} />
        <Route path="/Shop_metaverse" element={<Shop_metaverse />} />
        <Route path="/Virtual_store" element={<Virtual_store />} />
        <Route path="/Virtual_clinic" element={<Virtual_clinic />} />
        <Route path="/AI_chatbot" element={<AI_chatbot />} />
        <Route path="/ThreeD_Avatar" element={<ThreeD_Avatar />} />
        <Route
          path="/Threed_JewelryDesign"
          element={<Threed_JewelryDesign />}
        />
        <Route
          path="/ThreeD_Productdesign"
          element={<ThreeD_Productdesign />}
        />
        <Route path="/AI_news" element={<AI_news />} />
        <Route path="/AI_sexting" element={<AI_sexting />} />
        <Route path="/ThreeD_Animation" element={<ThreeD_Animation />} />
        <Route path="/Uber_Clone" element={<Uber_Clone />} />
        <Route path="/Taxi_app" element={<Taxi_app />} />
        <Route path="/Hospital_manage" element={<Hospital_manage />} />
        <Route path="/EV_charge" element={<EV_charge />} />
        <Route path="/Dating_app" element={<Dating_app />} />
        <Route path="/Food_delivery" element={<Food_delivery />} />
        <Route path="/Lms" element={<Lms />} />
        <Route path="/Cash_AppClone" element={<Cash_AppClone />} />
        <Route path="/Doordash_Clone" element={<Doordash_Clone />} />
        <Route path="/Handyman_Clone" element={<Handyman_Clone />} />
        <Route path="/E_comm" element={<E_comm />} />
        <Route path="/Car_rental" element={<Car_rental />} />
        <Route
          path="/School_ManagementSoftware"
          element={<School_ManagementSoftware />}
        />
        <Route
          path="/Restaurant_Management"
          element={<Restaurant_Management />}
        />
        <Route path="/Onlyfan_clone" element={<Onlyfan_clone />} />
        <Route path="/CarPooling_App" element={<CarPooling_App />} />
        <Route path="/Pickup" element={<Pickup />} />
        <Route path="/Hotel_management" element={<Hotel_management />} />
        <Route
          path="/RealEstate_Management"
          element={<RealEstate_Management />}
        />
        <Route
          path="/Contact_Us"
          element={<Contact_Us />}
        />
        <Route
          path="/Free_Seo_Audit"
          element={<Free_Seo_Audit />}
        />
        <Route
          path="/Blog"
          element={<Blog />}
        />
        <Route path="/Career" element={<Career />} />
        <Route path="/Case_Studies" element={<Case_Studies />} />
        <Route path="/ReadMore_MetaverseEcomerce" element={<ReadMore_MetaverseEcomerce />} />
        <Route path="/ReadMore_SmarterCommutes" element={<ReadMore_SmarterCommutes />} />
        <Route path="/ReadMore_AIAppDev" element={<ReadMore_AIAppDev />} />
        <Route path="/ReadMore_TopSoftware" element={<ReadMore_TopSoftware />} />
        <Route path="/ReadMore_ShopifyStore" element={<ReadMore_ShopifyStore />} />
        <Route path="/ReadMore_WordPress" element={<ReadMore_WordPress />} />
        <Route path="/ReadMoreAIDevelopment" element={<ReadMoreAIDevelopment />} />



      </Routes>
    </Router>
  );
}
export default App;

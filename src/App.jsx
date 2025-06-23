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
        <Route path="/Threed_JewelryDesign" element={<Threed_JewelryDesign />} />
                <Route path="/ThreeD_Productdesign" element={<ThreeD_Productdesign />} />


      </Routes>
    </Router>
  );
}
export default App;

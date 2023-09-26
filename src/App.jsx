import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbar from "./Navbar";
import {TrendingSong,Bollywood,TollyWood,Hollywood} from "./Song_Type";
import Footer from "./Footer";
function App()
{
    return(

        <>
        <Navbar/>
<TrendingSong/>
<Bollywood/>
<TollyWood/>
<Hollywood/>

<Footer/>
        </>
    );

}

export default App;
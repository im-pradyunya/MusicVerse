import React from "react";
import "./index.css";
import {Trendinds,Bollywoods,TollyWoods,Hollywoods} from "./DataSource";
import SongCard from "./Song_Card";


function nMusic(val)
{
return (
    <>
               <SongCard 
    imgsrc={val.imgsrc}
    songsrc={val.songsrc}
    title={val.title}
/>
    </>
);
}

function TrendingSong()
{
return(
    <>
    <h2 className="songType">Trendind Songs</h2>
         <div className="outer-wrapper">
        <div className="wrapper">
 
{Trendinds.map(nMusic)}

        </div>
       
        </div>
    </>
);
}

function Bollywood(){
    return (
        
        <>
    <h2 className="songType">Bollowood Songs</h2>
         <div className="outer-wrapper">
        <div className="wrapper">
        {Bollywoods.map(nMusic)}

        </div>
       
        </div>

        </>
    )
    ;
}

function TollyWood(){
    return (
        
        <>
    <h2 className="songType">TollyWood Songs</h2>
         <div className="outer-wrapper">
        <div className="wrapper">
        {TollyWoods.map(nMusic)}
  

        </div>
       
        </div>

        </>
    )
    ;
}

function Hollywood(){
    return (
        
        <>
    <h2 className="songType">Hollywood Songs</h2>
         <div className="outer-wrapper">
        <div className="wrapper">
      { Hollywoods.map(nMusic)}
        </div>
       
        </div>

        </>
    )
    ;
}



export {TrendingSong,Bollywood,Hollywood,TollyWood} ;
"use client"
import {useState } from 'react';
import './landingPage.css'
import LandingPageRow from './landingPageRow';
import foodData from '../data.js';

const LanDingPage = () => {
    const [data,setData]= useState(foodData);

    return (
        <div className="container-fluid">
            <LandingPageRow item={data[0]} item1={data[1]} item2={data[2]} item3={data[3]}/>
            <LandingPageRow item={data[4]} item1={data[5]} item2={data[6]} item3={data[7]}/>
            <LandingPageRow item={data[8]} item1={data[9]} item2={data[10]} item3={data[11]}/>
        </div>
    );
}
export default LanDingPage;
import React from 'react'
import { Header } from '../../Components/Header/Header'
import Recom from './Recom/Recom'
import { Slider } from "./Slider/Slider";
import { HomeCategoria } from './HomeCategoria/HomeCategoria';

export const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <HomeCategoria />
      <Recom />
    </div>
  );
};
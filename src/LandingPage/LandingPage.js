import React from "react";
import { TopNav } from "./TopNav/TopNav";
import logo from '../assets/yelp.png';
import styles from './LandingPage.module.css';
import { SearchBar } from "../SearchBar/SearchBar";

export const LandingPage = (props) => {
  return (
    <div>
      <TopNav />
      <img src={logo} className={styles.logo} alt='logo'/>
      <SearchBar/>
    </div>
  );
};

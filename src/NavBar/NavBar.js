import React from 'react';
import logo from '../assets/yelp.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export function NavBar(props) {
    return (
        <div className={styles['nav-bar']}>
            <Link to='/'><img className={styles.logo} src={logo} alt={'logo'}></img></Link>
            <SearchBar small={true} term={props.term} location={props.location}/>
            <div>
              <button className={`button is-small ${styles['nav-button']}`}>Sign In</button>
              <button className={`button is-small ${styles['nav-button']}`}>Register</button>
            </div>
        </div>
    )
}

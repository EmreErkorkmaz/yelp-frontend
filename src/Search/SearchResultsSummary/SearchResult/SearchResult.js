import React from "react";
import BusinessRating from "../../../BusinessRating/BusinessRating";
import styles from './SearchResult.module.css';

export function SearchResult() {
  return (
    <div className={styles['card-item']}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img className={styles['card-img']} src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholde"/>
          </figure>
        </div>
        <div className="card-content">
            <h3 className='subtitle'><strong>Restaurant Name</strong></h3>
            <BusinessRating/>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
              <p>Category - $$</p>
              <p><i style={{color: "#00ff00"}} className='fas fa-circle'/> Open Now</p>
            </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. 
            <br/>
          </div>
          <button className={`button ${styles['more-button']}`}>More</button>
        </div>
      </div>
    </div>
  );
}

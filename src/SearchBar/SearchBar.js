import React, { useState } from "react";
import styles from './SearchBar.module.css';

export function SearchBar(props) {
  const [term, setTerm] = useState(props.term || '');
  const [location, setLocation] = useState(props.location || '');

  const submit = e => {
    if(typeof props.search === 'function'){
      props.search(term, location);
    }
    console.log(term, location);
    e.preventDefault();
  }

  const sizeClass = props.small ? '' : 'is-medium'
  return (
    <form onSubmit={submit}>
      <div className="field has-addons">
        <div className="control">
          <div className={`button is-static ${sizeClass}`}>Search</div>
        </div>
        <p className="control">
          <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" onChange={(e) => setTerm(e.target.value)} value={term} placeholder="Restaurants, shops, stores..." />
        </p>
        <div className="control">
          <div className={`button is-static ${sizeClass}`}>NEAR</div>
        </div>
        <p className="control">
          <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" onChange={e => setLocation(e.target.value)} value={location} placeholder="Where" />
        </p>
        <button className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
          <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-search"></i></span>
        </button>
      </div>
    </form>
  );
}

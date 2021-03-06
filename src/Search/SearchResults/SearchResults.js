import React from 'react'
import { SearchResult } from '../SearchResultsSummary/SearchResult/SearchResult';
import styles from './SearchResults.module.css';

export function SearchResults(props) {
    if(!props.businesses || !props.businesses.length){
        return (<div></div>)
    }

    const searchResults = props.businesses.map(b=> {
        return <SearchResult key={b.id} businesses={b}/>
    })
    
    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    )
}

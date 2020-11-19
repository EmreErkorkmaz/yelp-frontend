import React from 'react'
import { SearchResult } from '../SearchResultsSummary/SearchResult/SearchResult';
import styles from './SearchResults.module.css';

export function SearchResults() {
    return (
        <div className={styles['search-results']}>
            <SearchResult key={1}/>
            <SearchResult key={2}/>
            <SearchResult key={3}/>
            <SearchResult key={4}/>
            <SearchResult key={5}/>
        </div>
    )
}

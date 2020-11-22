import { useState, useEffect } from "react";
import * as api from "./api";

export const useBusinessSearch = (term, location) => {
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState();
  const [searchParams, setsearchParams] = useState({ term, location });

  useEffect(() => {
    setBusinesses([]);
    const fetchdata = async () => {
      try {
        const rawData = await api.get("/businesses/search", searchParams);
        const resp = await rawData.json();
        setBusinesses(resp.businesses);
        setAmountResults(resp.total);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, [searchParams]);
  return [businesses, amountResults, searchParams, setsearchParams];
};

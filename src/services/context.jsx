// DataContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchEntities } from './api';  // חיבור לפונקציה מ-`api.js`

// יצירת ה-Context
const DataContext = createContext();

// Hook לגישה לנתונים מתוך ה-Context
export const useData = () => {
  return useContext(DataContext);
};

// DataProvider - רכיב שמספק את הנתונים
export const DataProvider = ({ children }) => {
  const [entities, setEntities] = useState({});
  const [loading, setLoading] = useState({});
  const [error, setError] = useState({});

  const fetchData = async (collectionName) => {
    if (entities[collectionName]) return;

    setLoading((prevState) => ({ ...prevState, [collectionName]: true }));

    try {
      const data = await fetchEntities(collectionName);
      setEntities((prevState) => ({ ...prevState, [collectionName]: data }));
    } catch (err) {
      setError((prevState) => ({ ...prevState, [collectionName]: 'Error fetching data' }));
    } finally {
      setLoading((prevState) => ({ ...prevState, [collectionName]: false }));
    }
  };

  return (
    <DataContext.Provider value={{ entities, loading, error, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useMemo,
  useCallback
} from 'react';
import {
  fetchFromFirestore,
  reconstructObjectInOrder
} from './api';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const cacheRef = useRef({});
  const [entities, setEntities] = useState({});
  const [loading, setLoading] = useState({});
  const [error, setError] = useState({});

  const fetchData = useCallback(async (collectionName) => {
    if (cacheRef.current[collectionName]) return;

    setLoading((prev) => ({ ...prev, [collectionName]: true }));

    try {
      const rawData = await fetchFromFirestore(collectionName);

      const reconstructedData = rawData.map(entry =>
        entry.orderedFields ? reconstructObjectInOrder(entry) : entry
      );

      cacheRef.current[collectionName] = reconstructedData;
      setEntities((prev) => ({
        ...prev,
        [collectionName]: reconstructedData
      }));
    } catch (err) {
      setError((prev) => ({
        ...prev,
        [collectionName]: 'Error fetching data'
      }));
    } finally {
      setLoading((prev) => ({
        ...prev,
        [collectionName]: false
      }));
    }
  }, []);

  const contextValue = useMemo(() => ({
    entities,
    loading,
    error,
    fetchData,
  }), [entities, loading, error, fetchData]);

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

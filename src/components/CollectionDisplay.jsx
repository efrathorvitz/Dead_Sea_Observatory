import React, { useEffect, useState } from 'react';
import { fetchEntities } from '../services/api';
import { useData } from '../services/context';
import EntityDisplay from './EntityDisplay';

const CollectionDisplay = ({ collectionName }) => {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fetchData } = useData();  

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetchEntities(collectionName);
        setEntities(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (collectionName) {
      getData();
    }
  }, [collectionName]); 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-10 text-center">{collectionName}</h2>
      {entities.map(entity => (
        <EntityDisplay key={entity.id} entity={entity} />
      ))}
    </div>
  );
};

export default CollectionDisplay;

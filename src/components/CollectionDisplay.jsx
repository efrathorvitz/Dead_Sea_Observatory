import React, { useEffect } from 'react';
import { useData } from '../services/context';
import EntityDisplay from './EntityDisplay';

const CollectionDisplay = ({ collectionName }) => {
  const { entities, loading, error, fetchData } = useData();

  useEffect(() => {
    if (collectionName && !entities[collectionName]) {
      fetchData(collectionName);
    }
  }, [collectionName, entities, fetchData]);

  if (loading[collectionName]) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error[collectionName]) {
    return <div className="text-red-500 text-center">{error[collectionName]}</div>;
  }

  const data = entities[collectionName] || [];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-10 text-center">{collectionName}</h2>
      {data.length > 0 ? (
        data.map(entity => <EntityDisplay key={entity.id} entity={entity} />)
      ) : (
        <p className="text-center text-gray-500">No data available.</p>
      )}
    </div>
  );
};

export default CollectionDisplay;

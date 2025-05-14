// ./src/components/CollectionDisplay.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EntityDisplay from './EntityDisplay';

const CollectionDisplay = ({ collectionName }) => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const fetchEntities = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/${collectionName}?populate=*`);
        setEntities(response.data.data);
      } catch (error) {
        console.error(`Error fetching ${collectionName}:`, error);
      }
    };

    fetchEntities();
  }, [collectionName]);

  return (
    <div>
      <h2>{collectionName}</h2>
      <div>
        {entities.map((entity) => (
          <EntityDisplay key={entity.id} entity={entity} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDisplay;

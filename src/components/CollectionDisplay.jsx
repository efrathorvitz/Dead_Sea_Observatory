// ./src/components/CollectionDisplay.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EntityDisplay from './EntityDisplay';

const baseUrl = 'https://committed-delight-2680eb60f9.strapiapp.com';
const CollectionDisplay = ({ collectionName }) => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const fetchEntities = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/${collectionName}?populate=*`);
        console.log(response);
        setEntities(response.data.data);
      } catch (error) {
        console.error(`Error fetching ${collectionName}:`, error);
      }
    };
    fetchEntities();
  }, [collectionName]);
  console.log(entities)
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

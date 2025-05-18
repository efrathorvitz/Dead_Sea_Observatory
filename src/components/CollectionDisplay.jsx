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
        const data = response.data.data;

        // מיון לפי order
        const sortedData = data.sort((a, b) => {
          const orderA = a.attributes?.order ?? 0;
          const orderB = b.attributes?.order ?? 0;
          return orderA - orderB;
        });

        setEntities(sortedData);
      } catch (error) {
        console.error(`Error fetching ${collectionName}:`, error);
      }
    };

    fetchEntities();
  }, [collectionName]);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-10 text-center">{collectionName}</h2>
      <div>
        {entities.map((entity) => (
          <EntityDisplay key={entity.id} entity={entity} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDisplay;

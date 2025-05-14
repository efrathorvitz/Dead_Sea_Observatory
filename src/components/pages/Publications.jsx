import React, { useEffect, useState } from 'react';
import EntityDisplay from '../EntityDisplay';
import { getPublications } from '../../services/api';

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const publicationsData = await getPublications();
        setPublications(publicationsData);
      } catch (err) {
        console.error(err);
        setError('Error fetching publications');
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Publications</h1>
      <div>
        {publications.map((publication) => (
          <EntityDisplay key={publication.id} entity={publication}/>
        ))}
      </div>
    </div>
  );
};

export default Publications;

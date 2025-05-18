import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import { getPeople } from '../../services/api';
import Person from './Person';
import EntityDisplay from '../EntityDisplay';

const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const peopleData = await getPeople();
        setPeople(peopleData);
      } catch (err) {
        console.error(err);
        setError('Error fetching people');
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">People</h1>
      <div>
        {people.map((person) => (
      <Person/>
        ))}
      </div>
    </div>
  );
};

export default People;

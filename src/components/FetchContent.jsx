import React, { useState, useEffect } from 'react';
import { refreshContent } from '../services/fetchContent';

const FetchContent = () => {
  const [status, setStatus] = useState('fetching'); // סטטוס: fetching, success, error

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus('fetching'); // התחלת תהליך
        await refreshContent(); // קריאה לפונקציה שמרעננת את התוכן
        setStatus('success'); // הצלחה
      } catch (error) {
        setStatus('error'); // שגיאה
        console.error('Error during content fetch:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center">
      {status === 'fetching' && (
        <div>
          <h2 className="text-2xl font-bold text-blue-900">Fetching Data...</h2>
          <p className="text-gray-500">Please wait while the data is being updated.</p>
        </div>
      )}
      {status === 'success' && (
        <div>
          <h2 className="text-2xl font-bold text-green-600">Success!</h2>
          <p className="text-gray-500">Data has been successfully fetched and saved.</p>
        </div>
      )}
      {status === 'error' && (
        <div>
          <h2 className="text-2xl font-bold text-red-600">Error!</h2>
          <p className="text-gray-500">Failed to fetch or save data. Please try again later.</p>
        </div>
      )}
    </div>
  );
};

export default FetchContent;
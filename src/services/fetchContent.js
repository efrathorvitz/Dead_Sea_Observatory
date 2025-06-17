import { fetchEntitiesToFirestore }  from './api.js';

const contentTypes = [
  'researchs',
  'people',
  'publications',
  'gallery',
  'facilities',
  'collaborations',
  'news',
];

/**
 * Refreshes all content types by fetching data from the API
 * and saving it to JSON files.
 */
export const refreshContent = async () => {
  try {
    console.log('Starting content refresh...');
    for (const type of contentTypes) {
      await fetchEntitiesToFirestore(type);
    }
    console.log('All content types have been refreshed and saved.');
  } catch (error) {
    console.error('Failed to refresh content:', error);
  }
};
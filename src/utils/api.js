import axios from 'axios';

const api = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch StackOverflow user reputation
 * @param {string} userId - StackOverflow user ID
 * @returns {Promise<number|null>} Reputation count
 */
export async function fetchStackOverflowReputation(userId = '10850045') {
  try {
    const response = await api.get(
      `https://api.stackexchange.com/2.3/users/${userId}?site=stackoverflow`
    );

    if (response.data.items && response.data.items.length > 0) {
      return response.data.items[0].reputation;
    }
  } catch (error) {
    console.error('Error fetching StackOverflow reputation:', error);
  }
  return null;
}

/**
 * Fetch Medium user stats
 * Note: Medium doesn't have a public API, you may need alternative solutions
 * @param {string} username - Medium username
 * @returns {Promise<number|null>} Blog count
 */
// eslint-disable-next-line no-unused-vars
export async function fetchMediumStats(username = '@artbindu') {
  try {
    // Medium doesn't provide a public API
    // You might need to use RSS feed or third-party services
    // Placeholder implementation
    console.log('Medium API not available. Consider using RSS feed parser.');
    return null;
  } catch (error) {
    console.error('Error fetching Medium stats:', error);
  }
  return null;
}

/**
 * Generic API call wrapper
 * @param {string} url - API endpoint
 * @param {object} config - Axios config
 * @returns {Promise<any>} API response
 */
export async function apiCall(url, config = {}) {
  try {
    const response = await api(url, config);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export default api;

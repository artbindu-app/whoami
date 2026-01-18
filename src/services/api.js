// API service for external integrations
import config from '../config/config';

export const fetchStackOverflowReputation = async () => {
  try {
    const response = await fetch(config.apiEndpoints.stackoverflow);
    const data = await response.json();
    if (data && data.items && data.items.length > 0) {
      return data.items[0].reputation;
    }
    return null;
  } catch (error) {
    console.error('Error fetching StackOverflow data:', error);
    return null;
  }
};

export const fetchMediumBlogCount = async () => {
  try {
    // Note: Medium RSS feed requires CORS proxy for browser access
    // This is a simplified version - you may need to implement a backend proxy
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const feedUrl = config.apiEndpoints.mediumRSS;
    
    const response = await fetch(proxyUrl + feedUrl);
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'text/xml');
    const items = xmlDoc.getElementsByTagName('item');
    
    return items.length;
  } catch (error) {
    console.error('Error fetching Medium blog count:', error);
    // Return a fallback value or null
    return null;
  }
};

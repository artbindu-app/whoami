import { useEffect, useState } from 'react';
import { fetchStackOverflowReputation, fetchMediumBlogCount } from '../services/api';

export const useSocialStats = () => {
  const [stackOverflowRep, setStackOverflowRep] = useState(null);
  const [mediumBlogCount, setMediumBlogCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      
      const [reputation, blogCount] = await Promise.all([
        fetchStackOverflowReputation(),
        fetchMediumBlogCount()
      ]);
      
      setStackOverflowRep(reputation);
      setMediumBlogCount(blogCount);
      setLoading(false);
    };

    fetchStats();
  }, []);

  return { stackOverflowRep, mediumBlogCount, loading };
};

export const useWorkExperience = (startDate) => {
  const [experience, setExperience] = useState('');

  useEffect(() => {
    const calculateExp = () => {
      const start = new Date(startDate);
      const current = new Date();
      
      let startObj = {
        yy: start.getUTCFullYear(),
        mm: start.getUTCMonth() + 1,
        dd: start.getUTCDate() + 1
      };
      
      let currentObj = {
        yy: current.getUTCFullYear(),
        mm: current.getUTCMonth() + 1,
        dd: current.getUTCDate() + 1
      };
      
      if (currentObj.dd < startObj.dd) {
        currentObj.mm = currentObj.mm - 1;
        currentObj.dd = currentObj.dd + 30;
      }
      
      if (currentObj.mm < startObj.mm) {
        currentObj.yy = currentObj.yy - 1;
        currentObj.mm = currentObj.mm + 12;
      }
      
      const years = currentObj.yy - startObj.yy;
      const months = currentObj.mm - startObj.mm;
      
      return `${years}${months === 6 ? '.5' : months >= 7 ? '.5+' : months >= 1 ? '+' : ''}`;
    };

    setExperience(calculateExp());
  }, [startDate]);

  return experience;
};

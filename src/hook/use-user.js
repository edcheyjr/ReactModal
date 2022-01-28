import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function useUser({ URL }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);
        const response = await fetch(URL);
        if (response) {
          const data = await response.json();
          setData(data);
        } else {
          console.log('no response');
        }
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, [URL]);
  return { data, loading, error };
}
// userUser.propTypes = {
//   URL: PropTypes.string.isRequired,
// };

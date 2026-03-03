import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ setUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error before new request

    try {
      const userData = await fetchUserData(searchTerm);
      setUser(userData); // Pass data to the parent component
    } catch (err) {
      setError('Looks like we can\'t find the user'); // Show error if the user is not found
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;
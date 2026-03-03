import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [user, setUser] = useState({
    avatar_url: '',
    login: '',
    img: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userData = await fetchUserData(searchTerm);
      setUser({
        avatar_url: userData.avatar_url,
        login: userData.login,
        img: userData.avatar_url
      });
    } catch (err) {
      setError('Looks like we can\'t find the user');
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
      
      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display error message if user is not found */}
      {error && <p>{error}</p>}
      
      {/* Display user data */}
      {user.login && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <p>Login: {user.login}</p>
          <p><a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        </div>
      )}
    </div>
  );
};

export default Search;
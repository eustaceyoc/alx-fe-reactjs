import React, { useState } from 'react';
import Search from './components/Search';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search setUser={setUser} />
      {user && (
        <div>
          <h2>{user.name || user.login}</h2> {/* Use login if name is not available */}
          <img src={user.avatar_url} alt={user.login} width={100} /> {/* Ensure correct field is used */}
          <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        </div>
      )}
    </div>
  );
};

export default App;
import { useState } from 'react'
import Search from './components/Search';


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search setUser={setUser} />
      {user && (
        <div>
          <h2>{user.name}</h2>
          <img src={user.avatar_url} alt={user.name} width={100} />
          <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        </div>
      )}
    </div>
  );
};

export default App

import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleMinReposChange = (e) => setMinRepos(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchUserData({
        username,
        location: location || undefined,
        minRepos: minRepos ? Number(minRepos) : undefined,
      });
      setUsers(data);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-950 text-gray-100 flex flex-col items-center justify-start px-4 py-16 min-h-screen">
      <div className="w-full max-w-3xl space-y-6">
        {/* Search Form */}
        <form
          onSubmit={handleFormSubmit}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">GitHub Advanced Search</h2>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="eg. johndoe"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Location (optional)
            </label>
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="eg. London"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Minimum Repos */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Minimum Repositories (optional)
            </label>
            <input
              type="number"
              value={minRepos}
              onChange={handleMinReposChange}
              placeholder="eg. 10"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold py-2 rounded-lg"
          >
            Search
          </button>
        </form>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {isLoading && (
            <p className="col-span-full text-center text-gray-400 animate-pulse">
              Loading...
            </p>
          )}

          {error && (
            <p className="col-span-full text-center text-red-400">
              Looks like we can't find users
            </p>
          )}

          {!isLoading && !error && users.length === 0 && (
            <p className="col-span-full text-center text-gray-400">
              Looks like we cant find the user
            </p>
          )}

          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-4 shadow-lg flex flex-col items-center text-center space-y-2 hover:shadow-xl transition-shadow"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full border border-gray-700"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold">{user.login}</h3>
              {user.location && <p className="text-gray-400 text-sm">{user.location}</p>}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 text-sm"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

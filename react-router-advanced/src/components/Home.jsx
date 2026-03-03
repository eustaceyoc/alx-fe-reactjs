import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome! Navigate to different sections:</p>

      <nav>
        <ul>
          <li>
            <Link to="/profile/details">Profile Details</Link>
          </li>

          <li>
            <Link to="/profile/settings">Profile Settings</Link>
          </li>

          <li>
            <Link to="/blog/1">Blog Post 1</Link>
          </li>

          <li>
            <Link to="/blog/2">Blog Post 2</Link>
          </li>

          <li>
            <Link to="/login">Login Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

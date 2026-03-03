import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!email) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label>
        Username
        <input 
          type="text" 
          name="username" 
          id="username"
          value={username} 
          onChange={(event) => (setUsername(event.target.value))}
        />
        {errors && (<span>{errors.username}</span>)}
      </label>
      <label>
        Email
        <input 
          type="email" 
          name="email" 
          id="email"
          value={email} 
          onChange={(event) => (setEmail(event.target.value))}
        />
        {errors && (<span>{errors.email}</span>)}
      </label>
      <label>
        Password
        <input 
          type="password" 
          name="pasword" 
          id="password"
          value={password} 
          onChange={(event) => (setPassword(event.target.value))}
        />
        {errors && (<span>{errors.password}</span>)}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

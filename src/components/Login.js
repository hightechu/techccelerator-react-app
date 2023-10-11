import { useState } from "react";
import { signIn } from "firebase_setup/firebase";
import { useNavigate } from 'react-router-dom';

// Login a user and redirect them to the user homepage
const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res = await signIn(email, password);
    if (res.error) seterror(res.error);
    navigate("/Home");
  };
  return (
    <>
      <div>
       
              <h3>Login</h3>
              {error ? <div>{error}</div> : null}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                /><br></br>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                /><br></br>
                <input type="submit" value="Submit" />
              </form>
              <br>
              </br>
              <p>
                New? <a href="/signup">Sign up here!</a>
              </p>
        
      </div>
      
    </>
  );
};

export default Login;
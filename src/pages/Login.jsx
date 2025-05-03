import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, user, setUser, setToken,metodorLoginapi } = useContext(GlobalContext);
  console.log("entro login");
  console.log(token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    metodorLoginapi(email,password);

    
  };

  return (
    <>
      <div className="container-login">
        <h3>Ingresa a tu pedido</h3>
        <h4>{token}</h4>

        <form onSubmit={handleSubmit}>
          <div className="container-login-element">
            <input
              className="campos"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="campos"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" class="btn btn-warning">
              Consultar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

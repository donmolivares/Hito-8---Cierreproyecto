import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Formulario from "../componentes/Formulario";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrl = "http://localhost:5000/api/pizzas";
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [totalcompra, setTotalcompra] = useState();
  const [token, setToken] = useState(true);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");

  const consultaApi = async () => {
    console.log("Llamando a la API");
    const respuesta = await fetch(apiUrl);
    let data = await respuesta.json();
    setProducts(data);
    setUser("");
    setToken(false);
  };

  /* OK Metodo handleLogout para CERRAR seccion de un usuario de la plataforma*/

  const handleLogout = () => {
    console.log("cerrando session");
    setUser(null);
    setToken(false);
    setEmail(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  /* OK Metodo LOGIN para validar acceso a la plataforma*/

  const metodorLoginapi = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    alert(data?.error || "Authentication successful!");

    localStorage.setItem("token", data.token);
    console.log(data);
    if (data.token.length <= 0) {
      setToken(false);
      console.log("No tiene Token");
      console.log(token);
    } else {
      setToken(true);
      console.log("Si tiene Token");
      setToken(true);
      console.log(token);
    }
  };

  /* OK Metodo REGISTER para REGISTRAR usuario en la api*/

  const metodoRegisterapi = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    alert(data?.error || "Authentication successful!");
    localStorage.setItem("token", data.token);
    console.log(data);
  };

  /* OK Metodo perfil para se hizo en el Profile usuario en la api*/ 

  /* OK Metodo REGISTER para validar usuario y traer datos desde la api*/
  const metodoProfileapi = async (token) => {};

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || null);
    consultaApi();
  }, []);

  /* Agrega al carro*/
  const buyProducts = (product, cantidad) => {
    const productrepeat = carrito.find((item) => item.id === product.id);
    totalizadorCarrito2();
    if (productrepeat) {
      
      setCarrito(
        carrito.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productrepeat.quanty + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, product]);
    }
  };
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const totalizadorCarrito2 = () => {
    const total = carrito.reduce((acc, el) => acc + el.price * el.quanty, 0);
    setTotalcompra(total);

    setTotalcompra(numberWithCommas(total)); 
  };

  const formatnumero = (numero) => {
    new Intl.NumberFormat().format(numero);
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        products,
        setProducts,
        carrito,
        setCarrito,
        buyProducts,
        totalcompra,
        setTotalcompra,
        totalizadorCarrito2,
        email,
        setEmail,
        handleLogout,
        metodoRegisterapi,
        metodorLoginapi,
        metodoProfileapi,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

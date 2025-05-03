import "../assets/Style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function Pizza() {
  const { buyProducts} = useContext(GlobalContext);

  const [product, setProduct] = useState([]);
  const [info, setInfo] = useState([]);
  const [info2, setInfo2] = useState([]);
  const [info3, setInfo3] = useState([]);
  const [info4, setInfo4] = useState([]);
  const [info5, setInfo5] = useState([]);
   const { cualpizza } = useParams();



  useEffect(() => {
    consultarInformacion();
  }, [product, cualpizza]);

  // 1. Función que consulta la API
  const consultarInformacion = async () => {
    const url = `http://localhost:5000/api/pizzas/${cualpizza}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);

    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    setInfo(`${data.desc}`); // con setInfo actualizamos el estado
    setInfo2(`${data.price}`);
    setInfo3(`${data.img}`);
    setInfo4(`${data.name}`);
    setInfo5(`${data.ingredients}`);
    
  };
  return (
    <div className="centrar">
      <div className="card-pizza-api">
        <div>
          <img className="imagen-pizza" src={info3} alt={info3} />
        </div>
        <div className="lado-derecho-card-api">
          <div className="seccion-nombre-pizza-api">
            <h2 className="nombre-pizza">{info4}</h2>
          </div>
          <div className="session-ingredientes">
            <h4 style={{ color: "#a49d9c" }}>Descripción</h4>
            <h6>{info} </h6>
          </div>
          <div>
            <h4>-</h4>
          </div>
          <div className="session-ingredientes">
            <h4 style={{ color: "#a49d9c" }}>Ingredientes</h4>
            <h6>{info5} </h6>
          </div>
          <div>
            <h3 style={{ color: "black" }}>Precio $ : {info2}</h3>
          </div>
     
          <div className="flex-row">
            <Link className="nav-link" aria-current="page" to={"/"}>
              <button class="btn btn-secondary">👈 Atras</button>
            </Link>

            <button
              class="btn btn-secondary"
              onClick={() => buyProducts(product,1)}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;

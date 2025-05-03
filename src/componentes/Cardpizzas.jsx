
import '../assets/Style.css'
import Pizza from '../pages/Pizza'
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext"

import { useContext } from 'react';


const Cardpizzas = ({product}) => {
  const {buyProducts,TotalizadorCarrito2} = useContext(GlobalContext);
  console.log(product.price)
  const precio = product.price;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const valor = numberWithCommas(precio)



    return(
       <div className="card-pizza">
            <img className="imagen-pizza" src={product.img} alt={product.name}/>
            <div className="seccion-nombre-pizza">
            <h2 className="nombre-pizza">{product.name}</h2>

            <div className="session-ingredientes">
                <p style={{color:"#a49d9c"}}>{product.desc}</p>
            </div>
            </div>
                <div className="session-ingredientes">
                <h3 style={{color:"#a49d9c"}}>Ingredientes</h3>
                {product.ingredients.map((ingrediente)=>(
                  <ul>
                    <li key={ingrediente}>{ingrediente} </li>
                  </ul>  
                )
                )}

            <p>- </p>
            </div> 
 
            <h3 style={{color:"black"}}>Precio $ : {valor}</h3>
            
            <div className="flex-row">
            <Link className="nav-link" aria-current="page" to={`/Pizza/${product.id}`}>
                  
              <button class="btn btn-light">Ver mas 👀</button>
             </Link>
                 
                <button class="btn btn-secondary" onClick={() => buyProducts(product)} >Añadir 🛒</button>

            </div>
        </div>
        
    )
 }

 export default Cardpizzas
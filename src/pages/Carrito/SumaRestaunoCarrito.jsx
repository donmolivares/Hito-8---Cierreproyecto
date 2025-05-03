import {useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext"

const SumaRestaunoCarrito = ({product}) => {
    const {carrito, setCarrito, buyProducts} = useContext(GlobalContext)

  
  
    const decrese = () => {
        const productrepeat = carrito.find((item) => item.id === product.id)

        productrepeat.quanty !== 1 &&
       setCarrito(carrito.map((item) => (item.id === product.id ? {...product, quanty: productrepeat.quanty - 1}     : item     )))

        

    }
   
  return (
    <>
        <button class="btn btn-secondary" style={{with: '40px', height: '40px'}} onClick={decrese}>
            -
        </button>
        
        <button class="btn btn-secondary" style={{with: '40px', height: '40px'}} onClick={() => buyProducts(product)}>
            +
        </button>
    </>
  )
}

export default SumaRestaunoCarrito
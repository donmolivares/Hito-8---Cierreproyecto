import {useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import SumaRestaunoCarrito from "./SumaRestaunoCarrito"
import './Carrito.css'

const ElementoCarrito = () => {
    const {carrito, setCarrito, formatnumero} = useContext(GlobalContext)

    const deleteProducts = (id) => {
        const foundId = carrito.find((element) => element.id === id)

        const nuevoCarrito = carrito.filter((element) => {
            return element !== foundId
        })

        setCarrito(nuevoCarrito)
    }

 
    return carrito.map((product) => {
        return (
            <div className="product-card-container" key={product.id}>
                <img src={product.img} alt="product-card"/>
                <h3>{product.name}</h3>
                <h3>{product.quanty}</h3>
                <SumaRestaunoCarrito product={product}/>
                
                <h4>{product.price}</h4>
                <h4>{product.quanty}</h4>
                <h4>{product.price * product.quanty}</h4>
                <h3 className="cart-delete-product" onClick={() => deleteProducts(product.id)}>
                    ❌
                </h3>
            </div>
          )
    })

}

export default ElementoCarrito
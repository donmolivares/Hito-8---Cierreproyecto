import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TotalizadorCarrito = () => {
  const { carrito, totalcompra, setTotalcompra, token } =
    useContext(GlobalContext);

  const total = carrito.reduce((acc, el) => acc + el.price * el.quanty, 0);
  setTotalcompra(total);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const numero = numberWithCommas(total);
  let navigate = useNavigate();

  /* Metodo REGISTER para REGISTRAR usuario en la api*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(`Bearer ${token}`);
    await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cart: carrito,
      }),
    });

    Swal.fire({
      title:
        "Exito! Su pedido ha sido cursado! Gracias por preferirnos te enviaremos al Home 🍕",
      icon: "success",
      draggable: true,
    });
    navigate("/");
  };

  return (
    <div className="cartTotal">
      <h3>Total a pagar: {numero}</h3>
      <div></div>
      {token && (
        <>
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={token === false}
            class="btn btn-success"
          >
            {" "}
            - Pagar -
          </button>
        </>
      )}
    </div>
  );
};

export default TotalizadorCarrito;

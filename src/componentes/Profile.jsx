import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


const Profile = () => {
  const [user, setUser] = useState(null);
  const {handleLogout, metodoProfileapi} = useContext(GlobalContext);
  
  useEffect(() => {
    
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, []);
  console.log(user)

  return (
    <>
    
      
        {user ? (
 
            <div  className="texto_perfil">
            <div  className="div_foto_profile">
              <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="foto perfil" className="foto_profile"
              />
            </div>
            <div>
            
              <h3>{user.id}</h3>
              <h3>{user.email}</h3>
              <p>Perfil : Administrador</p>
              <Link className="nav-link" aria-current="page" to="/home">
                  <button type="button" className="btn btn-secondary pl-5" onClick={() => {
                    handleLogout();}}>🚪 Cerrar Sesión
                  </button>
              </Link>
           </div>  
         </div>
        ) : (
            <p>Please login to view your profile.</p>
        )}
      

      
    </>
  );
};
export default Profile;

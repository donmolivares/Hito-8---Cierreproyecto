import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Profile() {

  const { user } = useContext(GlobalContext);

  return ( 

        <div  className="texto_perfil">
           <div  className="div_foto_profile">
             <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="foto perfil" className="foto_profile"
             />
           </div>
           <div>
             <h3>{user}</h3>
             <p>Perfil : Administrador</p>
          </div>  
        </div>
          
       
  );
}
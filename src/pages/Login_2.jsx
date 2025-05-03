import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

export default function Login() {
 const[Email,setEmail] = useState('')
 const[Password,setPassword] = useState('') 
 const[Error,setError] = useState('') 

 



 const handleSubmit = (evento)=> {
    evento.preventDefault()
    if (Email === ''){
        alert('Debe ingresar su  Email,  no puede estar Vacio !')
        setError(true)
        return
     }
   
     if (Password === ''){
        alert('Debe Ingresar alguna clave!')
        setError(true)
        return
     }
 
     {/* validacion largo input*/}
     if (Password.length < 6) {
        alert("La password Ingresada debe tener por lo menos 6 Caracteres");
        setError(true)
        return
      } 

      setError(false)
      setPassword('')
      setEmail('')
      console.log('Largo de datos cumple con lo solicitado y se procesadara a validar su acceso !!')
      return
    }

   const handleChange = (evento, elemento, setelemeto) => {
    setelemeto(evento.target.value)
    console.log(elemento)
   }

 
  return (
    <div className="Formulario_Datos">
        <Form className="formato" action="submit" onSubmit={(evento)=>handleSubmit(evento)}>
         <div className='titulo-login'>
            <h3>Login</h3>
        </div>
        <Form.Group className="w-75" controlId="formmail">
                <h3>Ingrese su email</h3>
                <input className="text-muted w-75" id = "Email" value = {Email} type="email" placeholder="nombre@gmail.com" onChange= {(evento)=>handleChange(evento,Email,setEmail)}/>
        </Form.Group>
       
        <Form.Group className="w-75 " controlId="formpassword">
                <h3>Ingrese su password</h3>
                <input className="text-muted w-75" id = "Password" value = {Password} type="password" placeholder="password" onChange= {(evento)=>handleChange(evento,Password,setPassword)}/>
        </Form.Group>

                 
        <Button className= "btn btn-success mt-3"type="submit">Login</Button>
        
        {Error === false? <p className='text-primary'>Largo de datos cumple con lo solicitado y se procesadara a validar su acceso !!</p>:null}
        
        
        </Form>
    </div>
)}

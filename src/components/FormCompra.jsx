import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../api/order";
import { useCartContext } from "../context/cartContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import alert from "../js/alertas";

const FormCompra = (view) =>{

    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [verifyEmail, setVerifyEmail] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);

    function validEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    const [btnInactivo, setBtnInactivo]= useState (true);

    const { getTotal, getIva, getTotalCompra, getEnvio, cart, emptyCart } = useCartContext();

    useEffect(()=> {
      (view) ? handleShow() : handleClose()
      if((name!="") && (surname!="") && (phone!="") && (email!="") && (verifyEmail !="")){
        setBtnInactivo(false);
      }
      else{
        setBtnInactivo(true)
      }

  }, [view,name,surname, phone,email,verifyEmail]);

    const createOrder = async () => {

        if(!validEmail(email)){
          alert.alertaMensajeAnimado("Verifique mail ingresado", "error")
        }
        else{
              if(email != verifyEmail){
                alert.alertaMensajeAnimado("Error: los campos email y verificar email no coinciden","error")  
              }
              else
              {

                const items = cart.map(({ id, titulo, cantidad, precio }) => ({
                  id,
                  titulo,
                  cantidad,
                  precio,
                }));
                
                const today = new Date();
                const fecha = today.toLocaleDateString('es-UY');
                const estado = "GENERADA"
                
                const order = {
                  data: {fecha, estado},
                  buyer: {name, surname, phone, email},
                  items,
                  total: getTotal(),
                  iva: getIva(),
                  envio: getEnvio(),
                  totalCompra: getTotalCompra()
                };
    
                const id =  await addOrder(order);
       
                alert.alertaMensajeAnimado("Orden de compra Nro: " + `${id}` +" generada exitosamente ", "success")
                emptyCart();
                navigate("/");
              }
            }
    };

return(
    <div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Datos del cliente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="form">
              <span>Nombre</span>
              <input className="form__nombre" onChange={(e) => setName(e.target.value)}/>
              <span>Apellido</span>
              <input className="form__apellido" onChange={(e) => setSurname(e.target.value)}/>
              <span>Telefono</span>
              <input className="form__telefono" onChange={(e) => setPhone(e.target.value)}/>
              <span>Email</span>
              <input className="form__mail" onChange={(e) => setEmail(e.target.value)}/>
              <span>Verificar Email</span>
              <input className="form__verifyMail" onChange={(e) => setVerifyEmail(e.target.value)}/>
          </div>
          <button className="form__button" disabled = {btnInactivo} onClick={createOrder}>Confirmar Compra</button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
   </div>)
}

export default FormCompra;
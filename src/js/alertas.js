import Swal from 'sweetalert2'

const alertas = (mensaje) =>{
   Swal.fire(mensaje)
}

const alertaMensajeAnimado = (mensaje, icono) =>{
   Swal.fire({
       title: mensaje,
       icon: icono,
       showClass: {
           popup: 'animate__animated animate__fadeInDown'
       },
       hideClass: {
           popup: 'animate__animated animate__fadeOutUp'
       }
   })
}

export default {alertas, alertaMensajeAnimado};

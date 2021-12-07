import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Modal, 
    ModalHeader, ModalBody, FormGroup, Label
} from "reactstrap"
import axios from 'axios';
  
function Modals({modal, setModal, i, elemento}) {
    const compra = async (elemento) =>{
        setModal(!modal)  
        const stocks =elemento.stock -1;  
        const fac = {comic: elemento.titulo,
                      cliente: localStorage.getItem('usuario'),
                      total: elemento.precio,
                      comicisbn: elemento.isbn}
        const comic ={ isbn:elemento.isbn,
                       titulo:elemento.titulo,
                       volumen:elemento.volumen,
                       descripcion:elemento.descripcion,
                       genero:elemento.genero,
                       precio:elemento.precio,
                       stock:stocks}
        await axios.post('http://127.0.0.1:2021/api/facturas',fac)
        await axios.put(`http://127.0.0.1:2021/api/comics/isbn/${elemento.isbn}`,comic)

    }

    // Modal open state
    //const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    //const toggle = () => setModal(!modal);
  
    return (
        <div style={{
            display: 'block', width:  '100%', padding: 30, color: 'Black', fontSize: 14, textAlign:'justify'
            }}>
                {console.log('elemento modal',elemento)}
            <Modal isOpen={modal}
                
              //  toggle={toggle}
                modalTransition={{ timeout: 1000 }}>
                <ModalHeader>Pantalla de compra</ModalHeader>
                <ModalBody>
                <ModalHeader>Informacion de compra</ModalHeader>
                    
                    <FormGroup>
                        <Label>comic</Label>
                        <br />
                        <Label>{elemento.titulo}</Label> 
                        <hr />  
                    </FormGroup>
                    <FormGroup>
                        <Label>Usuario</Label>
                        <br />
                        <Label>{localStorage.getItem('usuario')}</Label>
                        <hr />  
                    </FormGroup>
                    <FormGroup>
                        <Label>Isbn</Label>
                        <br />
                        <Label>{elemento.isbn}</Label>
                        <hr />  
                    </FormGroup>
                    <FormGroup>
                        <Label>Precio</Label>
                        <br />
                        <Label>{elemento.precio}</Label>
                        <hr />
                    </FormGroup>
                    
                    <Button onClick={()=>{compra(elemento)}}>Confirmar compra</Button>
                    <Button onClick={()=>{setModal(!modal)}}>cancelar</Button>
                </ModalBody>

            </Modal>
            </div>
    );
}
  
export default Modals;
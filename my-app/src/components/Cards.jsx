import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button, Modal,
    ModalBody,ModalHeader,FormGroup,Label
} from "reactstrap"

  
const Cards = ({respuesta}) => {
    
    const [modal, setModal] = React.useState(false);
    
    // Toggle for Modal
    const toggle = () => setModal(!modal);
    return (
        <div style={{
            display: 'block', width:  '18rem', padding: 30, color: 'Black', fontSize: 14, textAlign:'justify'
        }}>
            {console.log('esto es elemento en cards: ', respuesta)}
            {respuesta.map((elemento) => {
                
                console.log(elemento);

                <Card >
                <CardImg variant="top" src="https://i2.wp.com/wipy.tv/wp-content/uploads/2021/05/green-lantern.jpg?fit=1000%2C600&ssl=1" />
                <CardBody>
                    <CardTitle>{elemento.titulo}</CardTitle>
                    <CardText>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </CardText>
                    <Button color="primary"
               onClick={toggle}>comprar</Button>
                </CardBody>
                </Card>
            })}
                
             
            

 
            
            <div style={{
            display: 'block', width:  '100%', padding: 30, color: 'Black', fontSize: 14, textAlign:'justify'
        }}>
            <Modal isOpen={modal}
                
                toggle={toggle}
                modalTransition={{ timeout: 1000 }}>
                <ModalHeader>Pantalla de compra</ModalHeader>
                <ModalBody>
                <ModalHeader>Informacion de compra</ModalHeader>
                    <FormGroup>
                        <Label>Fecha</Label>
                        
                    </FormGroup>
                    <FormGroup>
                        <Label>comic</Label>
                        
                    </FormGroup>
                    <FormGroup>
                        <Label>Usuario</Label>
                        
                    </FormGroup>
                    <FormGroup>
                        <Label>serial</Label>
                        
                    </FormGroup>
                    <FormGroup>
                        <Label>Precio</Label>
                        
                    </FormGroup>
                    
                    <Button>Confirmar compra</Button>
                </ModalBody>

            </Modal>
            </div>
            
        </div>
    );
}
  
export default Cards;
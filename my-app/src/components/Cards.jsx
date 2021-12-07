import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button, CardFooter
} from "reactstrap"
import Modals from './Modal';

  
const Cards = ({respuesta}) => {
    
    const [modal, setModal] = React.useState(false);
    
    // Toggle for Modal
    //const toggle = () => setModal(!modal);
    return (
        <div style={{
            display: 'flex', width:'225px', color: 'Black', fontSize: 14, textAlign:'justify', 
        }}>
            
            {console.log('esto es elemento en cards: ', respuesta)}
            
                    <div>
                   
                    <Card >
                    <CardImg variant="top" 
                    src="https://i2.wp.com/wipy.tv/wp-content/uploads/2021/05/green-lantern.jpg?fit=1000%2C600&ssl=1" />
                    <CardBody>
                        <CardTitle>{respuesta.titulo} vol: {respuesta.volumen}</CardTitle>    
                        <hr /> 
                        <CardText>
                        {respuesta.descripcion}
                        </CardText>
                        <hr />     
                    </CardBody>
                    <CardFooter >
                        $ {respuesta.precio}  | 
                        
                        <Button color="primary"
                        onClick={()=>{setModal(!modal)}}>comprar</Button>
                    </CardFooter>
                    </Card>
                    <Modals modal={modal} setModal={setModal}  elemento={respuesta}/> 
                    {/* i={i} */}
                    </div>
                )    
            
            
 
           
        </div>
    );
}
  
export default Cards;
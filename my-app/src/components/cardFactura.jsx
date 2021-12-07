import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button, CardFooter
} from "reactstrap"
import axios from 'axios';
import { useHistory } from 'react-router-dom';

  
const CardFactura = ({respuesta}) => {
    const history = useHistory()
    const eliminar = async (comicisbn)=>{
        console.log('se llama la funcion compra',comicisbn)
        await axios.delete(`http://127.0.0.1:2021/api/facturas/comicsisbn/${comicisbn}`)
        history.push('/')
    }
   
    return (
        <div style={{
            display: 'flex',  color: 'Black', fontSize: 14, textAlign:'justify', 
        }}>
            
            {console.log('esto es elemento en cards: ', respuesta)}
            {respuesta.map((elemento) => {
                
                //console.log(elemento);
                return(
                   
                    <Card >
                    <CardImg variant="top" 
                    src="https://i2.wp.com/wipy.tv/wp-content/uploads/2021/05/green-lantern.jpg?fit=1000%2C600&ssl=1" />
                    <CardBody>
                        <CardTitle>{elemento.comicisbn} </CardTitle> 
                        <hr />   
                        <CardText>
                        {elemento.cliente}
                        </CardText>    
                        <hr />
                        <CardText>
                        {elemento.comic}
                        </CardText>    
                    </CardBody>
                    <CardFooter >
                        
                        <br />
                        <Button onClick={()=>{eliminar(elemento.comicisbn)}}>Eliminar</Button>
                    </CardFooter>
                    </Card> 
    
                )    
            })}
            
 
            
            
        </div>
    );
}
  
export default CardFactura;
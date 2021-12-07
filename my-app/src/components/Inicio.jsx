import React,{useState, useEffect} from "react";
import Carousels  from "./Carousels";
import Cards from "./Cards"
import axios from "axios";
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button, Modal,
    ModalBody,ModalHeader,FormGroup,Label
} from "reactstrap"

const Inicio = () => {
    const [respuesta, setRespuesta] = useState([])
    useEffect(()=>{
        consumoAPI()
    
    }, [])
    const consumoAPI = query =>{

        axios.get('http://127.0.0.1:2021/api/comics').then((res) => {
            console.log('Este es el result: ',res)
            setRespuesta(res.data)
            // {res.data.map((elemento) => {
                
            //      console.log(elemento);

            //      <Cards elemento={elemento}/>
            //  })}
            
        }).catch((err) => {
            console.error('Este es el error: ', err)
        })
    }
    // const cartas = () =>{
    //     if(respuesta !== undefined ){
    //         return(
    //         respuesta.map((elemento) => {
            
    //             console.log(elemento);
                       
    //                     <Card >
    //                     <CardImg variant="top" src="https://i2.wp.com/wipy.tv/wp-content/uploads/2021/05/green-lantern.jpg?fit=1000%2C600&ssl=1" />
    //                     <CardBody>
    //                         <CardTitle>{elemento.titulo}</CardTitle>
    //                         <CardText>
    //                         Some quick example text to build on the card title and make up the bulk of
    //                         the card's content.
    //                         </CardText>
    //                         <Button >comprar</Button>
    //                     </CardBody>
    //                     </Card>
                

    //         })
    //         )
    //     }
   // }
    return(
        <div>
           <Carousels/>
           
            {/* {cartas()} */}
            
           <Cards respuesta={respuesta}/>
        </div>
        
    );
} 
export default Inicio;
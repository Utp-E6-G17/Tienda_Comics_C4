import React,{useState, useEffect} from "react";
import Carousels  from "./Carousels";
import Cards from "./Cards"
import axios from "axios";


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
    
    return(
        <div>
           <Carousels/>
           <div style={{
            display: 'flex',  padding: 30
            }}>
              { respuesta.map((elemento) =>{
               return(<Cards respuesta={elemento}/>)
           })} 
           </div>
           
            
           
           
        </div>
        
    );
} 
export default Inicio;
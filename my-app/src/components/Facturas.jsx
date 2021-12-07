import React,{useState, useEffect} from "react";
import CardFactura from "./cardFactura"
import axios from "axios";



const Facturas = () => {
    const [respuest, setRespuest] = useState([])
    useEffect(()=>{
        consumoAPI()
    
    }, [])
    const consumoAPI = query =>{

        axios.get('http://127.0.0.1:2021/api/facturas').then((res) => {
            console.log('Este es el result: ',res)
            setRespuest(res.data)
            
        }).catch((err) => {
            console.error('Este es el error: ', err)
        })
    }
    
    return(
        <div style={{
            display: 'flex', padding: 30
        }} >
          
            
           <CardFactura respuesta={respuest}/>
           
        </div>
        
    );
} 
export default Facturas;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
  
function App() {
  
    // Modal open state
    const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);
  
    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            
        </div >
    );
}
  
export default App;
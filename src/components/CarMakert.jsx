import React, {useState} from "react";
//import '../carMakert.css'
import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const CarMakert = ({carMakert, modifProduct}) => {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return(
        <Row>
            <Col md={6} className="mb-2">
                <Button onClick={toggleShowA} className="mb-2">
                    Car Makert
                </Button>
                <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">you carmakert</strong>
                </Toast.Header>
                <Toast.Body>
                    <div className="carMakert">
                    {
                        carMakert.map(product => (
                            <Product
                                key={product.id} 
                                product={product} 
                                carMakert={carMakert} 
                                modifProduct={modifProduct}
                            />
                        ))
                    }
                    </div>
                    <Button variant="primary" type="button">Buy all</Button>
                </Toast.Body>
                </Toast>
            </Col>
        </Row>
    ) ;
}

export default CarMakert ;
import React, { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Card from 'react-bootstrap/Card';

const Product = ({product, products, carMakert, modifProduct}) => {

    const {id, article, vaule, img} = product

    const selectProduct = (id) => {
        const product = products.filter(
            product => product.id === id
        )[0];
        modifProduct([...carMakert, product]);
        console.log(carMakert);
    }
    //no entendi
    const deletProduct = (id) => {
        const newProduct = carMakert.filter(product => product.id !== id);
        modifProduct(newProduct)
    }

    return(
        <Fragment>
            <Card style={{ width: '18rem' }}>
                {
                    products?<Card.Img variant="top" src={img} />:<></>
                }
                <Card.Body>
                    <Card.Title>{article}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{id}</Card.Subtitle>
                    <Card.Text>
                        {vaule}
                    </Card.Text>
                    {
                        products?
                            <Button variant="primary" type="button" onClick={() => selectProduct(id)}>Buy</Button>
                        :
                            <Button variant="outline-danger" type="button" onClick={() => deletProduct(id)}>delet</Button>
                    }
                </Card.Body>
            </Card>

        </Fragment>
    )
}

export default Product
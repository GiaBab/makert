import React, { Fragment } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css' ;

const Presuppose = () => {
    return(
        <Fragment>
            <h4>presupuesto</h4>
            <FloatingLabel
                controlId="floatingTextarea"
                label="mail"
                className="mb-3"
            >
                <Form.Control as="textarea" placeholder="Leave a comment here" type="email"/>
            </FloatingLabel>
            <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
        </Fragment>
    ) ;
}

export default Presuppose ;
import React from "react" ;
import { Fragment } from "react" ; 
import 'bootstrap/dist/css/bootstrap.min.css' ;
import '../footer.css'

const Footer = ({}) => {
    return(
        <Fragment>
            <div className="footer">
                <h2>All Market</h2>
                <a href="www.twitter.com">twitter</a> | <a href="www.youtube.com">youtube</a> | <a href="www.facebook.com">facebook</a>
                <br/>
                copyright
            </div>
        </Fragment>
    )
}

export default Footer;
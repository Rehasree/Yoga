import React from 'react';
import {Row,Col,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
//,MailIcon,ArrowRightIcon
const Footer =()=>{
    return(
        <div id="footer">
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <h4>Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    </div>
                    <div className="col-lg-6">
                        <Form action="" method="post">
                        <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                        </Form>
                    </div>
                    </div>
                </div>
            </div>
            <div className="footer-top">
             <div className="container">
                 <Row>
                     <Col className="footer-links" lg={3} md={6}>
                     <h4>Useful Links</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">About us</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Services</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
                        </ul>
                     </Col>
                 </Row>
              </div>
            </div>
        </div>
    )
}

export default Footer;
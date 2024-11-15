import { Link } from '@remix-run/react';
import { Col, Container, Row } from 'react-bootstrap';

const CommonFooter1 = () => {
    return (
        <div className="hk-footer border-0">
            <Container as="footer" className="footer">
                <Row>
                    <Col xl={8} className="text-center">
                        <p className="footer-text pb-0">
                            <span className="copy-text">Jampack © {new Date().getFullYear()} All rights reserved.</span>
                            <Link to="#" >Privacy Policy</Link>
                            <span className="footer-link-sep">|</span><Link to="#" >T&amp;C</Link><span className="footer-link-sep">|</span><Link to="#" >System Status</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CommonFooter1

import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Main.css'
import logo from '../../img/tap30-logo.png'; // Tell webpack this JS file uses this image
import myLogo from '../../img/my-logo.png'; // Tell webpack this JS file uses this image

function Main({ initialData }) {
    return (
        <div style={{ backgroundImage: `url(${initialData.background_url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center 30%", height: "100vh" }}>
            <div className="main">
                <Container>
                    <Row>
                        <Col xs={12} md={8} className="mx-auto d-flex flex-column">
                            <h2 className="mx-auto text-center">فرم نظرسنجی و ارتقا سطح خدمت رسانی</h2>
                            <img src={logo} class="mx-auto w-35 mt-3" alt="" />
                            <Link to="/started" className="mx-auto mt-5">
                                <Button className="my-btn">شروع</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className="mx-auto">
                            <h3 className="text-center">
                                قدرت گرفته از
                            <a href="//www.google.com">
                                    <img src={myLogo} className="mr-3 w-10" alt="" />
                                </a>
                            </h3>
                            <p className="text-center">
                                پلتفرم طراحی فرم های crm آنلاین
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Main

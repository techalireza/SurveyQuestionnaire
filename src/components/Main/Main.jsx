import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Main.css'

function Main({ initialData }) {
    return (
        <div style={{backgroundImage: `url(${initialData.background_url})` , backgroundRepeat:"no-repeat", backgroundSize:"cover" , height:"100vh"}}>
            <Container>
                <Row>
                    <Col xs={12} md={8} className="mx-auto d-flex flex-column">
                        <h2 className="mx-auto text-center">فرم نظرسنجی و ارتقا سطح خدمت رسانی</h2>
                        <img src={initialData.logo_url} class="mx-auto w-35 mt-3" alt="" />
                        <Link to="/started"  className="mx-auto mt-5">
                            <Button className="my-btn">شروع</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className="mx-auto mt-10">
                        <h3 className="text-center">
                            قدرت گرفته از
                            <a href="//www.google.com">
                                <img src="../../../img/my-logo.png" className="mr-3 w-10" alt="" />
                            </a>
                        </h3>
                        <p className="text-center">
                            پلتفرم طراحی فرم های crm آنلاین
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main

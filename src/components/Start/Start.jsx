import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

function Start({ initialData }) {
    return (
        <div style={{backgroundImage: `url(${initialData.background_url})` , backgroundRepeat:"no-repeat", backgroundSize:"cover" , height:"100vh"}}>
            <Container>
                <Row>
                    <Col xs={12} md={8} className="mx-auto d-flex flex-column">
                        <h2 className="mt-5 mx-auto">فرم نظرسنجی و ارتقا سطح خدمت رسانی</h2>
                        <img src={initialData.logo_url} class="mx-auto w-50" alt="" />
                        <Link to="/started"  className="mx-auto">
                            <Button>شروع</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className="mx-auto">
                        <span>
                            قدرت گرفته از
                            <a href="//www.google.com">
                                <img src="../../../img/my-logo.png" className="w-50 mt-5 mx-auto" alt="" />
                            </a>
                        </span>
                        <p className="text-center">
                            پلتفرم طراحی فرم های crm آنلاین
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Start

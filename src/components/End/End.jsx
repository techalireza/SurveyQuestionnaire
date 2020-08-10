import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../End/End.css'

function End({ outPut, initialData }) {
    console.log("out put : ", outPut)
    return (
        <div style={{ backgroundImage: `url(${initialData.background_url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center 30%", height: "100vh" }}>
            <div className="end">
                <Container>
                    <Row>
                        <Col xs={12} md={8} className="mx-auto d-flex flex-column">
                            <h2 id="end-title" className="mx-auto text-center">با تشکر از زمانی که صرف پاسخ گویی به سوالات کردید</h2>
                            <img src={initialData.logo_url} class="mx-auto w-35" alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className="mx-auto">
                            <h3 className="text-center">
                                قدرت گرفته از
                            <a href="//www.google.com">
                                    <img src="../../../img/my-logo.png" className="w-10" alt="" />
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

export default End

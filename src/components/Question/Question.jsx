import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Row, Col } from 'reactstrap'
import './Question.css'

function Question({ activeStep, setActiveStep, initialData, setOutPut, outPut }) {
    let history = useHistory();

    const handleNext = () => {
        if (activeStep === (initialData.question.length - 1))
            history.push("/end");
        else
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleAnswer = (id, key) => {
        outPut.find(item => item.id == id) ?
            setOutPut(
                outPut.map(item => item.id == id ? { id: id, answer: key } : item)
            ) :
            setOutPut([...outPut, { id: id, answer: key }])


        handleNext();
        console.log(outPut)
    }

    return (
        <>
            <div className="question">
                {
                    initialData.question.map((item, index) =>
                        index == activeStep &&
                        <div key={item.id} className="ques" style={{ direction: 'rtl', textAlign: "center" }}>
                            <p>{item.text}</p>
                            {item.option.map(opt =>
                                <Button style={{ color: "#fff" }} className="my-btn" onClick={() => handleAnswer(item.id, opt.key)}>
                                    {opt.text}
                                </Button>
                            )}
                        </div>
                    )
                }
            </div>
            <Row>
                <Col xs={12} md={12} className="mx-auto d-lg-flex flex-row justify-content-between align-items-end handle-margin px-5" style={{ direction: 'rtl', textAlign: 'center', marginTop: '2rem' }}>
                    <img src={initialData.logo_url} class="mx-auto w-15 my-4" alt="" />
                    <div className="crm">
                        <h3 className="text-left">
                            قدرت گرفته از
                            <a href="//www.google.com">
                                <img src="../../../img/my-logo.png" className="mr-3 w-4" alt="" />
                            </a>
                        </h3>
                        <p className="text-left">
                            پلتفرم طراحی فرم های crm آنلاین
                            </p>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Question
